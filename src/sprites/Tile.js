import Phaser from 'phaser'

import Constants from '../constants'
import {g2a} from '../utils'

export default class extends Phaser.GameObjects.Sprite {
  constructor ({ scene, gx, gy,  }) {
    super(scene, g2a(gx), g2a(gy), 'tile')
    this.game = scene
    this.gx = gx
    this.gy = gy
    this.displayWidth = Constants.tileSize
    this.displayHeight = Constants.tileSize

    // Allow this to be interacted with.
    this.setInteractive({ useHandCursor: false })
    // When clicked, call the scenes clickTile function on this position.
    this.on('pointerup', () => {
      this.game.clickTile(this.gx, this.gy)
    })
  }

  setHighlight() {
    this.setTint('0xDDDDDD')
  }
  removeHighlight() {
    this.clearTint()
  }
}
