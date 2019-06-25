import { validPosition } from '../utils'

// Action to move a game piece by one tile.
export default class {
  // Provide the piece to move and the target location.
  constructor ({ state, piece, x, y }) {
    this.state = state
    this.piece = piece
    this.x = x
    this.y = y
  }

  // Execute the action.
  // Returns a Promise which resolves when the move is done.
  execute () {
    // Set the new position for the piece.
    this.state.setPieceAtPosition({ piece: this.piece, x: this.x, y: this.y })
    // Tween the graphics.
    return this.piece.tween({ x: this.x, y: this.y })
  }

  // Returns true if the move is valid.
  isValid () {
    // Check that the move stays on the board.
    if (!validPosition({ x: this.x, y: this.y })) return false

    // Check that the target location is empty.
    if (this.state.getPieceAtPosition({ x: this.x, y: this.y }) !== null) return false

    // Calculate the distance of the move.
    const deltaX = Math.abs(this.x - this.piece.x)
    const deltaY = Math.abs(this.y - this.piece.y)

    // Not a valid move if you don't move.
    if (deltaX === 0 && deltaY === 0) return false

    // Can only move distance one.
    if (deltaX > 1 || deltaY > 1) return false

    // Valid move.
    return true
  }

  // Returns true if this is the last move the player can make.
  isLastMove () {
    return true
  }
}
