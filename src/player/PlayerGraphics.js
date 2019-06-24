import Phaser from 'phaser'
import GraphicsComponent from '../base/GraphicsComponent'
import Constants from '../constants'
import { g2a } from '../utils'

// Component for the player's graphics.
export default class extends GraphicsComponent {
  constructor ({ scene, x, y }) {
    super({ scene, x, y })
    this.sprite = new Sprite({ scene, asset: 'blob', x, y })
    scene.add.existing(this.sprite)
  }

  getSprite () {
    return this.sprite
  }
}

const SCALE = 0.7
class Sprite extends Phaser.GameObjects.Sprite {
  constructor ({ scene, asset, x, y }) {
    super(scene, g2a(x), g2a(y), asset)
    this.displayWidth = Constants.tileSize * SCALE
    this.displayHeight = Constants.tileSize * SCALE
  }
}
