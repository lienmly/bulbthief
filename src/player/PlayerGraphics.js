import Phaser from 'phaser'
import GamePieceGraphics from '../piece/GamePieceGraphics'
import C from '../constants'
import { g2a } from '../utils'

// Component for the player's graphics.
export default class extends GamePieceGraphics {
  constructor ({ scene, x, y, number = 0 }) {
    super({ scene, x, y })
    this.sprite = new Sprite({ scene, asset: `slime${number}`, x, y })
    scene.add.existing(this.sprite)
  }

  getSprite () {
    return this.sprite
  }

  tween ({ x, y, time, updateAnimation = true }) {
    const sprite = this.getSprite()
    const centerX = sprite.getCenter().x
    const centerY = sprite.getCenter().y
    if (updateAnimation) {
      if (x < centerX) {
        sprite.animateDirection({ direction: 'left' })
      } else if (x > centerX) {
        sprite.animateDirection({ direction: 'right' })
      } else if (y > centerY) {
        sprite.animateDirection({ direction: 'down' })
      } else {
        sprite.animateDirection({ direction: 'up' })
      }
    }
    return super.tween({ x, y, time })
  }
}

const SCALE = 1
class Sprite extends Phaser.GameObjects.Sprite {
  constructor ({ scene, asset, x, y }) {
    super(scene, g2a(x), g2a(y), asset)
    this.displayWidth = C.tileSize * SCALE
    this.displayHeight = C.tileSize * SCALE
    this.setDepth(C.depth.piece)
    const dirs = ['down', 'left', 'right', 'up']
    for (let i = 0; i < 4; i++) {
      scene.anims.create({
        key: this.getAnimationName({ direction: dirs[i] }),
        frames: scene.anims.generateFrameNumbers(asset, { start: 0 + i * 8, end: 7 + i * 8 }),
        frameRate: 20,
        repeat: -1,
        yoyo: true
      })
    }
    this.animateDirection({ direction: 'down' })
  }
  animateDirection ({ direction }) {
    this.anims.play(this.getAnimationName({ direction }, true))
  }
  getAnimationName ({ direction }) {
    return this.texture.key + '_' + direction
  }
}
