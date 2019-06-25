import { g2a } from '../utils'

// Wrapper for any class that acts like a piece of the board game.
// e.g. Items, players, etc.
export default class {
  constructor ({ game, x, y, graphics = null }) {
    this.game = game
    this.graphics = graphics
    // Note that the position is only provided to give the graphics a starting position.
    // The State class maintains the true position of all objects.
    this.x = x
    this.y = y
  }

  // Tween a piece to a location.
  // Returns a Promise which resolves when the movement is done.
  tween ({ x, y, time = 350 }) {
    if (this.graphics) {
      return this.graphics.tween({ x: g2a(x), y: g2a(y), time })
    }
    return Promise.resolve(true)
  }
}
