import Phaser from 'phaser'
import C from '../../../constants'
import { g2a } from '../../../utils'
import TileHighlights from './TileHighlights'
import Subscribable from '../../../subscribable/Subscribable'

export default class Tiles extends Subscribable({}) {
  constructor ({ stateGraphics }) {
    super()
    stateGraphics.subscribePrepare(({ scene, controller }) => {
      this.scene = scene
      this.controller = controller
      this.tiles = this.createTiles()
      this.tileHighlights = new TileHighlights({ tiles: this })
      this.publishPrepare({ controller })
    })
    stateGraphics.subscribeStart(() => { this.publishStart({}) })
  }
  // Create the tile sprites that act as the game board.
  createTiles () {
    const tiles = []
    for (let y = 0; y < C.gameSize; y++) {
      tiles[y] = []
      for (let x = 0; x < C.gameSize; x++) {
        const number = (x + y) % 2
        const tile = new Tile({ scene: this.scene, x, y, number })
        tiles[y][x] = tile
        this.scene.add.existing(tile)
      }
    }
    return tiles
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

// Sprite for a tile of the game board.
class Tile extends Phaser.GameObjects.Sprite {
  constructor ({ scene, x, y, number }) {
    const defaultAsset = `tile/tile_${number}.png`
    super(scene, g2a(x), g2a(y), 'bulbthief', defaultAsset)
    this.defaultAsset = defaultAsset
    this.displayWidth = C.tileSize
    this.displayHeight = C.tileSize
    this.depth = C.depth.background
    this.setPipeline('Light2D')
  }
  setHighlight () {
    this.setTexture('bulbthief', 'tile/tile_highlight.png')
  }
  removeHighlight () {
    this.setTexture('bulbthief', this.defaultAsset)
  }
}
