import GamePiece from '../piece/GamePiece'
import PlayerGraphics from './PlayerGraphics'

// Wrapper for a Player.
// Headless means to not create graphics.
// Number refers to player 0 or 1 - used for graphics.
export default class extends GamePiece {
  constructor ({ game, scene, headless = false, x, y, number = 0 }) {
    super({ game, x, y })
    if (!headless) {
      this.setGraphics({ graphics: new PlayerGraphics({ scene, x, y, number }) })
    }
  }
}
