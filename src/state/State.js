import C from '../constants'
import Player from '../player/Player'
import { validPosition } from '../utils'
import StateGraphics from './graphics/StateGraphics'
import Subscribable from '../subscribable/Subscribable'

// Represents the game state.
export default class extends Subscribable({}) {
  constructor ({ game }) {
    super()
    this.game = game

    game.subscribePrepare(({ scene, controller, headless }) => {
      this.scene = scene
      this.controller = controller
      this.headless = headless

      this.turn = 0
      this.pieces = this.createPieces()
      this.players = this.createPlayers()

      if (!headless) {
        this.graphics = new StateGraphics({ state: this })
      }
      this.publishPrepare({
        scene, controller, headless
      })
    })
    game.subscribeStart(() => { this.publishStart({}) })
    game.subscribeUpdate((opts) => { this.publishUpdate(opts) })
  }

  // Return the piece at a given tile position.
  getPieceAtPosition ({ x, y }) {
    if (!validPosition({ x, y })) return null
    return this.pieces[y][x]
  }

  setPieceAtPosition ({ piece, x, y }) {
    if (!validPosition({ x, y })) return

    // Clear the old position.
    this.pieces[piece.y][piece.x] = null

    // Set the piece in the new position.
    this.pieces[y][x] = piece
    piece.x = x
    piece.y = y
  }

  // Returns the player whose turn it is.
  getCurrentPlayer () {
    return this.players[this.turn]
  }

  // Switch the turn to the other player.
  changeTurn () {
    this.turn = 1 - this.turn
  }

  // Create the two players in their default starting positions.
  createPlayers () {
    const x = Math.floor(C.gameSize / 2)
    const yPositions = [0, C.gameSize - 1]
    const players = []
    for (let i = 0; i < 2; i++) {
      const y = yPositions[i]
      players[i] = new Player({ game: this.game, scene: this.scene, headless: this.headless, x, y, number: i })
      this.setPieceAtPosition({ piece: players[i], x, y })
    }
    return players
  }

  // Create the 2D array of game pieces, initialized to nulls.
  createPieces () {
    const pieces = []
    for (let y = 0; y < C.gameSize; y++) {
      pieces[y] = []
      for (let x = 0; x < C.gameSize; x++) {
        pieces[y][x] = null
      }
    }
    return pieces
  }
}
