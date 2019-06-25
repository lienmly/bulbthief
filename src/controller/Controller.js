import { validPosition } from '../utils'
import MoveAction from '../action/MoveAction'

// Takes raw inputs and converts them into meaningful actions.
export default class {
  constructor ({ game, state }) {
    this.game = game
    this.state = state
    this.blocked = true
    this.actionBeginListeners = []
    this.actionEndListeners = []

    // When the game starts, allow input.
    game.subscribeGameStart(() => { this.allowInput() })
  }

  // Allow other methods to be called when an action begins or ends.
  subscribeActionBegin (callback) {
    this.actionBeginListeners.push(callback)
  }

  subscribeActionEnd (callback) {
    this.actionEndListeners.push(callback)
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

  // Called when a player clicks a screen location.
  clickTile ({ x, y }) {
    if (this.blocked) return
    if (!validPosition({ x, y })) return

    // Get the proposed action.
    const action = this.getActionForTile({ x, y })
    if (action === null || !action.isValid()) return

    // Block input.
    this.blockInput()

    // Tell listeners an action is beginning.
    for (const callback of this.actionBeginListeners) callback()

    // Run the action, then allow input when done.
    action.execute().then(() => {
      if (action.isLastMove()) {
        this.state.changeTurn()
      }
      // Notify listeners that the action is over.
      for (const callback of this.actionEndListeners) callback()
      this.allowInput()
    })
  }

  // Returns the action that would occur by clicking on this tile.
  getActionForTile ({ x, y }) {
    const player = this.state.getCurrentPlayer()
    const targetPiece = this.state.getPieceAtPosition({ x, y })

    // If the targeted location is an empty tile it's a move action.
    if (targetPiece === null) {
      return new MoveAction({ state: this.state, piece: player, x, y })
    }
    return null
  }
}
