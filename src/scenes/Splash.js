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

    // Slime animations.
    for (let i = 0; i <= 1; i++) {
      this.load.spritesheet(`slime${i}`,
        `assets/images/slimeSheet${i}.png`,
        { frameWidth: 64, frameHeight: 64 }
      )
    }
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
