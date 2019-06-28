import State from './State'
import GameGraphics from './graphics/GameGraphics'
import GameHotSeatInput from '../input/GameHotSeatInput'
import Controller from '../controller/Controller'

// Wrapper for a Game.
export default class {
  constructor ({ scene = null, headless = false }) {
    this.scene = scene
    this.headless = headless

    // Create the components for the game.
    this.state = new State({
      game: this,
      scene,
      headless
    })
    this.controller = new Controller({
      game: this,
      state: this.state
    })
    this.input = new GameHotSeatInput({
      scene,
      controller: this.controller
    })

    // Create graphics components if not in headless mode.
    if (!headless) {
      this.graphics = new GameGraphics({
        game: this,
        state: this.state,
        scene: this.scene,
        controller: this.controller })
    }

    // Once everything is done, notify listeners that the game begins!
    this.publishGameStart()
  }

  subscribeGameStart (callback) {
    if (!this.gameStartListeners) this.gameStartListeners = []
    this.gameStartListeners.push(callback)
  }

  publishGameStart () {
    if (!this.gameStartListeners) return
    for (const callback of this.gameStartListeners) callback()
  }

  // Called once per game step.
  // Time is the current time in ms.
  // Delta is the time since last step in ms.
  update ({ time, delta }) {
    this.publishGameUpdate({ time, delta })
  }

  subscribeGameUpdate (callback) {
    if (!this.gameUpdateListeners) this.gameUpdateListeners = []
    this.gameUpdateListeners.push(callback)
  }

  publishGameUpdate (opts) {
    if (!this.gameUpdateListeners) return
    for (const callback of this.gameUpdateListeners) callback(opts)
  }
}
