import State from '../state/State'
import GameHotSeatInput from '../input/GameHotSeatInput'
import Controller from '../controller/Controller'
import Subscribable from '../subscribable/Subscribable'

// Wrapper for a Game.
export default class extends Subscribable({}) {
  constructor ({ scene = null, headless = false }) {
    super()
    this.scene = scene
    this.headless = headless

    // Create the components for the game.
    this.state = new State({ game: this })
    this.input = new GameHotSeatInput({ game: this })
    this.controller = new Controller({ game: this })

    // Once objects are created, let listeners know.
    this.publishPrepare({
      state: this.state,
      controller: this.controller,
      input: this.input,
      scene: this.scene,
      headless: this.headless
    })

    // Now the game begins.
    this.publishStart({})
  }

  // Both times are in milliseconds.
  update ({ time, delta }) {
    this.publishUpdate({ time, delta })
  }
}
