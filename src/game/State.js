import Constants from '../constants'
import Player from '../player/Player'

export default class {
  constructor ({ game, headless = false }) {
    this.game = game
    this.headless = headless
    this.pieces = createPieces()
    this.players = createPlayers({ game, headless })
    this.turn = 0
  }
}

// Create the 2D array of game pieces, initialized to nulls.
function createPieces () {
  const pieces = []
  for (let y = 0; y < Constants.gameSize; y++) {
    pieces[y] = []
    for (let x = 0; x < Constants.gameSize; x++) {
      pieces[y][x] = null
    }
  }
  return pieces
}

// Create the two players in their default starting positions.
function createPlayers ({ game, headless }) {
  const x = Math.floor(Constants.gameSize / 2)
  const yPositions = [0, Constants.gameSize - 1]
  const players = []
  for (let i = 0; i < 2; i++) {
    const y = yPositions[i]
    players[i] = new Player({ game, headless, x, y })
  }
  return players
}
