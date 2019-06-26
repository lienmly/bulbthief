import GamePiece from '../GamePiece'

export default class extends GamePiece {
  constructor ({ game, x, y, headless = false }) {
    super({ game, x, y })
  }
}
