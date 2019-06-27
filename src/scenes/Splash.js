import Phaser from 'phaser'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    this.load.multiatlas('bulbthief', 'assets/atlas/bulbthief.json', 'assets/atlas')
    //
    // load your assets
    //
    // this.load.image('blob', 'assets/images/blob.png')
    // this.load.image('tile', ['assets/images/tile.png', 'assets/images/tile_n.png'])

    // // Slime animations.
    // this.load.spritesheet({
    //   key: 'slime0',
    //   url: 'assets/images/slimeSheet0.png',
    //   normalMap: 'assets/images/slimeSheet0_n.png',
    //   frameConfig: {
    //     frameWidth: 64,
    //     frameHeight: 64
    //   }
    // })
    // this.load.spritesheet({
    //   key: 'slime1',
    //   url: 'assets/images/slimeSheet1.png',
    //   normalMap: 'assets/images/slimeSheet1_n.png',
    //   frameConfig: {
    //     frameWidth: 64,
    //     frameHeight: 64
    //   }
    // })
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
