import Phaser from 'phaser'

import Constants from '../constants'
import { g2a, a2g } from '../utils'

// Player appears this much smaller than one tile size.
const SCALE = 0.7

export default class extends Phaser.GameObjects.Sprite {
  constructor ({ scene, gx, gy }) {
    super(scene, g2a(gx), g2a(gy), 'blob')
    this.game = scene
    this.displayWidth = Constants.tileSize * SCALE
    this.displayHeight = Constants.tileSize * SCALE
    this.setGamePosition({ gx, gy, clearOldPosition: false })
  }

  setGamePosition ({ gx, gy, clearOldPosition = true }) {
    if (clearOldPosition &&
      typeof this.gx !== 'undefined' && typeof this.gy !== 'undefined') {
      this.scene.clearTileContent({ gx: this.gx, gy: this.gy })
    }
    this.gx = gx
    this.gy = gy
    this.scene.setTileContent({ gx, gy, content: this })
  }

  // Move a player to [gx, gy] over time millisecnds.
  // onComplete is called when the tween is completed.
  // If test is true, this will only return true or false but not actually move.
  move ({ gx, gy, time = 300, onComplete = null, testMovement = false }) {
    // Check if this move will push another player.
    let other = this.game.getPlayerAt(gx, gy)
    if (other != null) {
      // Yes - it pushes another player.
      // Get the delta components of this move.
      let gxd = gx - this.gx
      let gyd = gy - this.gy
      // Check where the other player would get pushed.
      // They get pushed twice as far.
      let pushedPosition = other.getPushedPosition({ gxd: gxd * 2, gyd: gyd * 2 })
      // If they were able to be pushed, then push them.
      if (other.gx !== pushedPosition.gx || other.gy !== pushedPosition.gy) {
        if (!testMovement) other.move(pushedPosition)
      } else {
        // Otherwise, this move is impossible.
        return false
      }
    }
    if (testMovement) return true

    // Tween to the new position.
    let x = g2a(gx)
    let y = g2a(gy)
    this.game.tweens.add({
      targets: this,
      x,
      y,
      ease: 'Cubic',
      duration: time,
      onComplete: () => {
        // When the animation is done, update position and call back.
        this.setGamePosition({ gx, gy })
        if (onComplete) onComplete()
      }
    })
    return true
  }

  // Get the new position when a player is pushed by some movement delta.
  getPushedPosition ({ gxd, gyd }) {
    let gx = this.gx
    let gy = this.gy
    // As long as there is some delta left, keep moving.
    while (Math.abs(gxd) > 0 || Math.abs(gyd) > 0) {
      // Temporary positions.
      let gx0 = gx
      let gy0 = gy
      // If there is an x component to move in remaining:
      if (Math.abs(gxd) > 0) {
        // If positive, move right.
        if (gxd > 0) {
          gxd--
          gx0++
        } else {
          // Otherwise move left.
          gxd++
          gx0--
        }
      }
      // If there is a y component to move in remaining:
      if (Math.abs(gyd) > 0) {
        // If positive, move down.
        if (gyd > 0) {
          gyd--
          gy0++
        } else {
          // Otherwise, move up.
          gyd++
          gy0--
        }
      }
      // If at any point we are out of bounds, break the loop.
      if (!inBounds({ gx: gx0, gy: gy0 })) break
      // Update the new result position because we are still in bounds.
      gx = gx0
      gy = gy0
    }
    return { gx, gy }
  }
}

// Returns whether a position is within the game space.
function inBounds ({ gx, gy }) {
  return (gx >= 0 && gy >= 0 && gx < Constants.gameSize && gy < Constants.gameSize)
}
