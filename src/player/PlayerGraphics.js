import Phaser from 'phaser'
import GamePieceGraphics from '../base/GamePieceGraphics'
import C from '../constants'
import { g2a } from '../utils'

// Component for the player's graphics.
export default class extends GamePieceGraphics {
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
    this.displayWidth = C.tileSize * SCALE
    this.displayHeight = C.tileSize * SCALE
    this.depth = C.depth.piece
  }
}
