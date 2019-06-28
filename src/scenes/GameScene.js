import Phaser from 'phaser'
import Game from '../game/Game'

// Phaser Scene for the main gameplay.
export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }

  init () {}
  preload () {}
  create () {
    this.game = new Game({ scene: this })
  }
  update (time, delta) {
    this.game.update({ time, delta })
  }
}
