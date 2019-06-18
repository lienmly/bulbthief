import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    //
    // load your assets
    //
    this.load.image('blob', 'assets/images/blob.png')
    this.load.image('tile', 'assets/images/tile.png')
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
