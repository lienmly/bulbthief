import State from './State'
import GameGraphics from './GameGraphics'

// Wrapper for a Game.
export default class {
  constructor ({ scene = null, headless = false }) {
    this.scene = scene
    if (!headless) {
      this.graphics = new GameGraphics({ scene })
    }
    this.state = new State({ game: this, headless })
  }

  getScene () {
    return this.scene
  }
}
