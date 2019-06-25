import Phaser from 'phaser'
import C from '../constants'
import { g2a } from '../utils'

// Component for game graphics.
// e.g. any graphics not handled by the game pieces themselves.
export default class {
  constructor ({ scene }) {
    this.scene = scene
    this.tiles = createTiles({ scene })
  }

  // Highlights an array of positions and returns the rest to normal.
  setHighlights ({ positions = [] }) {
    // Unhighlight everything.
    for (let y = 0; y < C.gameSize; y++) {
      for (let x = 0; x < C.gameSize; x++) {
        this.tiles[y][x].removeHighlight()
      }
    }
    // Highlight given positions.
    for (const { x, y } of positions) {
      this.tiles[y][x].setHighlight()
    }
  }
}

// Create the tile sprites that act as the game board.
function createTiles ({ scene }) {
  const tiles = []
  for (let y = 0; y < C.gameSize; y++) {
    tiles[y] = []
    for (let x = 0; x < C.gameSize; x++) {
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
    this.displayWidth = C.tileSize
    this.displayHeight = C.tileSize
    this.depth = C.depth.background
  }
  setHighlight () {
    this.setTint('0xC0C0C0')
  }
  removeHighlight () {
    this.clearTint()
  }
}
