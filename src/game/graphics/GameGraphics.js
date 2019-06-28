import Tiles from './Tiles'
import TileHighlights from './TileHighlights'
import Lighting from './Lighting'

// Component for game graphics.
// e.g. any graphics not handled by the game pieces themselves.
export default class {
  constructor ({ game, state, scene, controller }) {
    this.game = game
    this.state = state
    this.scene = scene
    this.controller = controller

    this.tiles = new Tiles({ scene })
    this.tileHighlights = new TileHighlights({ game, controller, tiles: this.tiles })
    this.lighting = new Lighting({ game, state, scene })
  }
}
