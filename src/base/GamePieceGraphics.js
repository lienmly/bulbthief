// Wrapper for any class defining a graphical component.
export default class {
  constructor ({ scene, x, y }) {
    this.scene = scene
    this.x = x
    this.y = y
  }

  // Returns the main sprite for this component.
  getSprite () { }

  // Tween to a specified screen coordinate.
  // Returns a promise that resolves when the tween is done.
  tween ({ x, y, time }) {
    return new Promise((resolve) => {
      // Tween to the location.
      this.scene.tweens.add({
        targets: this.getSprite(),
        x,
        y,
        ease: 'Cubic',
        duration: time,
        onComplete: () => {
          resolve()
        }
      })
    })
  }
}
