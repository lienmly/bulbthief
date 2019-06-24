// Wrapper for any class that acts like a piece of the board game.
// e.g. Items, players, etc.
export default class {
  constructor ({ game, x, y, graphics = null }) {
    this.game = game
    this.x = x
    this.y = y
    this.graphics = graphics
  }
}
