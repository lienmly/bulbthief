import Phaser from 'phaser'
import Constants from '../constants'
import { g2a } from '../utils'

// Component for game graphics.
// e.g. any graphics not handled by the game pieces themselves.
export default class {
  constructor ({ scene }) {
    this.scene = scene
    this.tiles = createTiles({ scene })
  }
}

// Create the tile sprites that act as the game board.
function createTiles ({ scene }) {
  const tiles = []
  for (let y = 0; y < Constants.gameSize; y++) {
    tiles[y] = []
    for (let x = 0; x < Constants.gameSize; x++) {
      const tile = new Tile({ scene, x, y })
      tiles[y][x] = tile
      scene.add.existing(tile)
    }
  }
  return tiles
}

// Sprite for a tile of the game board.
class Tile extends Phaser.GameObjects.Sprite {
  constructor ({ scene, x, y }) {
    super(scene, g2a(x), g2a(y), 'tile')
    this.displayWidth = Constants.tileSize
    this.displayHeight = Constants.tileSize
  }
  setHighlight () {
    this.setTint('0xDDDDDD')
  }
  removeHighlight () {
    this.clearTint()
  }
}
