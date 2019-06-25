import { a2g } from '../utils'

// Raw input handler.
// HotSeat means it's for two players sharing a computer and taking turns.
// Calls the Game's Controller to transform raw inputs into actions.
export default class {
  constructor ({ scene, controller }) {
    this.scene = scene
    this.controller = controller
    this.setupInputHandler()
  }

  setupInputHandler () {
    this.scene.input.on('pointerup', (pointer) => {
      // Get the clicked position.
      let { x, y } = pointer
      // Transform the screen coordinates to tile coordinates.
      x = a2g(x)
      y = a2g(y)
      this.controller.clickTile({ x, y })
    })
  }
}
