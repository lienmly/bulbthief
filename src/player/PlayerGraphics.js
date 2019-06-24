import Phaser from 'phaser'
import GraphicsComponent from '../base/GraphicsComponent'
import Constants from '../constants'
import { g2a } from '../utils'

// Component for the player's graphics.
export default class extends GraphicsComponent {
  constructor ({ game, x, y }) {
    super({ game, x, y })
    this.sprite = new Sprite({ game, asset: 'blob', x, y })
  }

  getSprite () {
    return this.sprite
  }
}

const SCALE = 0.7
class Sprite extends Phaser.GameObjects.Sprite {
  constructor ({ game, asset, x, y }) {
    super(game, g2a(x), g2a(y), asset)
    this.displayWidth = Constants.tileSize * SCALE
    this.displayHeight = Constants.tileSize * SCALE
    game.add.existing(this)
  }
}
