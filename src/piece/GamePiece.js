import { g2a } from '../utils'

// Wrapper for any class that acts like a piece of the board game.
// e.g. Items, players, etc.
export default class {
  constructor ({ game, x, y }) {
    this.game = game
    // Note that the position is only provided to give the graphics a starting position.
    // The State class maintains the true position of all objects.
    this.x = x
    this.y = y
  }

  // Provide an extension of GamePieceGraphics to use for this class.
  setGraphics ({ graphics }) {
    this.graphics = graphics
  }

  // Return the center coordinates of the piece's sprite.
  getDrawPosition () {
    return this.graphics.getDrawPosition()
  }

  // Tween a piece to a location.
  // Returns a Promise which resolves when the movement is done.
  tween ({ x, y, time = 350, updateAnimation = true }) {
    // If no graphics then resolve immediately.
    if (!this.graphics) return Promise.resolve(true)

    // Otherwise tween to the location.
    return this.graphics.tween({ x: g2a(x), y: g2a(y), time, updateAnimation })
  }
}
