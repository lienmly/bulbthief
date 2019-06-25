import GamePiece from '../piece/GamePiece'
import PlayerGraphics from './PlayerGraphics'

// Wrapper for a Player.
export default class extends GamePiece {
  constructor ({ game, x, y, headless = false }) {
    let graphics = null
    if (!headless) {
      graphics = new PlayerGraphics({ scene: game.getScene(), x, y })
    }
    super({ game, x, y, graphics })
  }
}
