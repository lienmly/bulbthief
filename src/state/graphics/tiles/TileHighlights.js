import C from '../../../constants'

// Listens to changes in the game to tell graphics to update.
export default class TileHighlights {
  constructor ({ tiles }) {
    tiles.subscribePrepare(({ controller }) => {
      this.controller = controller
      this.tiles = tiles
      controller.subscribeActionBegin(() => { this.removeHighlights() })
      controller.subscribeActionEnd(() => { this.setHighlights() })
    })
    tiles.subscribeStart(() => {
      this.setHighlights()
    })
  }

  // Highlights an array of positions and returns the rest to normal.
  setHighlights () {
    const positions = []
    for (let y = 0; y < C.gameSize; y++) {
      for (let x = 0; x < C.gameSize; x++) {
        const action = this.controller.getActionForTile({ x, y })
        if (action !== null && action.isValid()) positions.push({ x, y })
      }
    }
    this.tiles.setHighlights({ positions })
  }

  removeHighlights () {
    this.tiles.setHighlights({})
  }
}
