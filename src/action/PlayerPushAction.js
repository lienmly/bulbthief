import BasicMoveAction from './BasicMoveAction'
import Player from '../player/Player'

// Action to move a player by one tile.
export default class {
  // Provide the player to move and the target location.
  constructor ({ state, piece, x, y }) {
    this.state = state
    this.piece = piece
    this.x = x
    this.y = y
    this.nestedActions = this.getValidNestedActions()
  }

  isValid () {
    return this.nestedActions.length !== 0
  }

  execute () {
    // Push the other player and tween the current player forward and back.
    const promises = [this.nestedActions[0].execute(),
      this.piece.tween({ x: this.x, y: this.y, time: 150 }).then((result) => {
        return this.piece.tween({ x: this.piece.x, y: this.piece.y, time: 700 })
      })]
    return Promise.all(promises)
  }

  // Generate possible ways to push the target player.
  getValidNestedActions () {
    const result = []

    // Make sure the position contains a player.
    const otherPiece = this.state.getPieceAtPosition({ x: this.x, y: this.y })
    if (!(otherPiece instanceof Player)) return result

    // Make sure you could potentially move there.
    const couldMoveAction = new BasicMoveAction(
      { state: this.state,
        piece: this.piece,
        x: this.x,
        y: this.y,
        minDist: 1,
        maxDist: 1,
        allowOverlap: true })
    if (!couldMoveAction.isValid()) return result

    // Test to see if different push lengths will work.
    const deltaX = this.x - this.piece.x
    const deltaY = this.y - this.piece.y
    for (let dist = 2; dist >= 1; dist--) {
      const x = this.x + (deltaX * dist)
      const y = this.y + (deltaY * dist)
      const nestedAction = new NestedPushAction({ state: this.state, piece: otherPiece, x, y, dist })
      if (nestedAction.isValid()) result.push(nestedAction)
    }
    return result
  }
}

class NestedPushAction extends BasicMoveAction {
  constructor ({ state, piece, x, y, dist }) {
    super({ state, piece, x, y, minDist: dist, maxDist: dist })
  }
}
