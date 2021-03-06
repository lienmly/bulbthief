import C from '../constants'
import { validPosition } from '../utils'
import Player from '../player/Player'
import NoAction from '../action/NoAction'
import PlayerMoveAction from '../action/PlayerMoveAction'
import PlayerPushAction from '../action/PlayerPushAction'

// Takes raw inputs and converts them into meaningful actions.
export default class {
  constructor ({ game }) {
    // Blocked means that input is not allowed (e.g. during tweens).
    this.blocked = true

    // Array of Actions that have occurred during a player's turn.
    // Used to determine what they have already done this turn.
    this.turnActions = []

    game.subscribePrepare(({ state }) => {
      this.state = state
    })
    game.subscribeStart(() => {
      this.allowInput()
    })
  }

  // Allow other methods to be called when an action begins or ends.
  subscribeActionBegin (callback) {
    if (!this.actionBeginListeners) this.actionBeginListeners = []
    this.actionBeginListeners.push(callback)
  }

  publishActionBegin () {
    if (!this.actionBeginListeners) return
    for (const callback of this.actionBeginListeners) callback()
  }

  subscribeActionEnd (callback) {
    if (!this.actionEndListeners) this.actionEndListeners = []
    this.actionEndListeners.push(callback)
  }

  publishActionEnd () {
    if (!this.actionEndListeners) return
    for (const callback of this.actionEndListeners) callback()
  }

  // Allow player to make actions.
  // Called when graphics are done tweening and such.
  allowInput () {
    this.blocked = false
  }

  // Prevent player from making actions.
  // Called before graphics start tweening and such.
  blockInput () {
    this.blocked = true
  }

  // Tell the state to change turn and clear local information about this turn.
  changeTurn () {
    this.turnActions = []
    this.state.changeTurn()
  }

  // Called when a player clicks a screen location.
  clickTile ({ x, y }) {
    if (this.blocked) return
    if (!validPosition({ x, y })) return

    // Get the proposed action.
    const action = this.getActionForTile({ x, y })
    if (action === null || !action.isValid()) return

    this.blockInput()
    this.publishActionBegin()
    // Run the action, then allow input when done.
    this.turnActions.push(action)
    action.execute().then(() => {
      // If you skipped your turn, or no actions are possible after this one, change turns.
      if (action instanceof NoAction || !this.anyActionPossible()) this.changeTurn()
      this.publishActionEnd()
      this.allowInput()
    })
  }

  // Returns the action that would occur by clicking on this tile.
  getActionForTile ({ x, y }) {
    const player = this.state.getCurrentPlayer()
    const targetPiece = this.state.getPieceAtPosition({ x, y })

    const actionArgs = { state: this.state, piece: player, turnActions: this.turnActions, x, y }

    // If you click yourself, it's skipping your turn.
    if (targetPiece === player) {
      return new NoAction(actionArgs)
    }

    // If the targeted location is an empty tile it's a move action.
    if (targetPiece === null) {
      return new PlayerMoveAction(actionArgs)
    }
    // If there's a player there, try to push.
    if (targetPiece instanceof Player) {
      return new PlayerPushAction(actionArgs)
    }
    return null
  }

  // Returns true if there is a move that can be made.
  anyActionPossible () {
    for (let y = 0; y < C.gameSize; y++) {
      for (let x = 0; x < C.gameSize; x++) {
        const action = this.getActionForTile({ x, y })
        if (action !== null && action.isValid() && !(action instanceof NoAction)) return true
      }
    }
    return false
  }
}
