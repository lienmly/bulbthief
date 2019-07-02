import Tiles from './tiles/Tiles'
import Lighting from './Lighting'
import Subscribable from '../../subscribable/Subscribable'

// Component for game graphics.
// e.g. any graphics not handled by the game pieces themselves.
export default class extends Subscribable({}) {
  constructor ({ state }) {
    super()
    this.state = state
    state.subscribePrepare(({ scene, controller }) => {
      this.tiles = new Tiles({ stateGraphics: this })
      this.lighting = new Lighting({ stateGraphics: this })
      this.publishPrepare({
        state,
        scene,
        controller,
        tiles: this.tiles
      })
    })
    state.subscribeStart(() => { this.publishStart({}) })
    state.subscribeUpdate((opts) => { this.publishUpdate(opts) })
  }
}
