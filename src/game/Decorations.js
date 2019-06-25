import C from '../constants'

// Handles extra visual elements.
export default class Decorations {
  constructor ({ game, graphics, controller }) {
    this.game = game
    this.graphics = graphics
    this.controller = controller

    // Subscribe to various events we care about.
    controller.subscribeActionBegin(() => { this.removeHighlights() })
    controller.subscribeActionEnd(() => { this.setHighlights() })
    game.subscribeGameStart(() => { this.setHighlights() })
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
    this.graphics.setHighlights({ positions })
  }

  removeHighlights () {
    this.graphics.setHighlights({})
  }
}
