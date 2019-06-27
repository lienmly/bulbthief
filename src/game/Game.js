import State from './State'
import GameGraphics from './GameGraphics'
import GameHotSeatInput from '../input/GameHotSeatInput'
import Controller from '../controller/Controller'
import Decorations from './Decorations'

// Wrapper for a Game.
export default class {
  constructor ({ scene = null, headless = false }) {
    this.scene = scene
    this.headless = headless

    // Allow listeners to listen for the game start.
    this.gameStartListeners = []

    // Create the components for the game.
    this.state = new State({ game: this, headless })
    this.controller = new Controller({ game: this, state: this.state })
    this.input = new GameHotSeatInput({ scene, controller: this.controller })

    // Create graphics components if not in headless mode.
    if (!headless) {
      this.graphics = new GameGraphics({ scene, state: this.state })
      this.decorations = new Decorations({ game: this, graphics: this.graphics, controller: this.controller })
    }

    // Once everything is done, notify listeners that the game begins!
    for (const callback of this.gameStartListeners) callback()
  }

  subscribeGameStart (callback) {
    this.gameStartListeners.push(callback)
  }

  getScene () {
    return this.scene
  }
}
