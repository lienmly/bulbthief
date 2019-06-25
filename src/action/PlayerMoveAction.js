import BasicMoveAction from './BasicMoveAction'

// Action to move a player by one tile.
export default class extends BasicMoveAction {
  // Provide the player to move and the target location.
  constructor ({ state, piece, turnActions, x, y }) {
    super({ state, piece, x, y, minDist: 1, maxDist: 1 })
    this.turnActions = turnActions
  }

  isValid () {
    if (!super.isValid()) return false
    if (this.turnActions.length !== 0) return false
    return true
  }
}
