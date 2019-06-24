// Wrapper for any class defining a graphical component.
export default class {
  constructor ({ game, x, y }) {
    this.game = game
    this.x = x
    this.y = y
  }

  // Returns the main sprite for this component.
  getSprite () { }

  // Move to a specified screen coordinate.
  move ({ x, y, time = 0 }) {
    // Tween to the location.
    this.game.tweens.add({
      targets: this.getSprite(),
      x,
      y,
      ease: 'Cubic',
      duration: time,
      onComplete: () => {
        // todo
      }
    })
  }
}
