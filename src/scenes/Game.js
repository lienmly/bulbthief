/* globals __DEV__ */
import Phaser from 'phaser'

import Constants from '../constants'
import Blob from '../sprites/Blob'
import Tile from '../sprites/Tile'

export default class extends Phaser.Scene {
  constructor(){
    super({ key: 'GameScene' })
  }

  init(){}
  preload(){}

  create() {
    this.tiles = this.createTiles()
    this.players = []
    this.players[0] = this.createBlob(Math.floor(Constants.gameSize / 2), 0)
    this.players[0].setTint('0xFFC0C0')
    this.players[1] = this.createBlob(Math.floor(Constants.gameSize / 2), Constants.gameSize - 1)
    this.players[1].setTint('0xC0C0FF')
    this.turn = 0
    this.blocked = false
    this.setHighlights()
  }

  getPlayerAt(gx, gy) {
    for (const player of this.players) {
      if (player.gx == gx && player.gy == gy) return player
    }
    return null
  }

  setTileContent({gx, gy}, content) {
    let tile = this.tiles[gy][gx]
    tile.setContent(content)
  }

  createTiles() {
    let tiles = []
    for (let gy=0; gy<Constants.gameSize; gy++) {
      this.tiles[gy] = []
      for (let gx=0; gx<Constants.gameSize; gx++) {
        let tile = new Tile({
          scene: this,
          gx, gy,
        })
        this.add.existing(tile)
        this.tiles[gy][gx] = tile
      }
    }
    return tiles
  }

  createBlob(gx, gy) {
    let blob = new Blob({
      scene: this,
      gx, gy,
    })
    this.add.existing(blob)
    return blob
  }

  clickTile(gx, gy) {
    // Don't let the player move if input is blocked.
    if (this.blocked) return

    // Get the current player.
    let player = this.players[this.turn]

    // Make sure you're only moving 1 tile max per axis and not 0 tiles.
    const gdx = Math.abs(player.gx - gx)
    const gdy = Math.abs(player.gy - gy)
    if (gdx > 1 || gdy > 1 || (gdx == 0 && gdy ==0)) return

    // Time to move the player!
    if (player.move({gx, gy, onComplete:()=>{
      // Update the turn when the animation is done.
      this.turn = 1 - this.turn
      this.setHighlights()
      // Unblock the input.
      this.blocked = false
    }})) {
      this.blocked = true
    }
  }

  setHighlights() {
    let player = this.players[this.turn]
    for (let gy=0; gy<Constants.gameSize; gy++) {
      for (let gx=0; gx<Constants.gameSize; gx++) {
        let tile = this.tiles[gy][gx]
        const gdx = Math.abs(player.gx - gx)
        const gdy = Math.abs(player.gy - gy)
        tile.removeHighlight()
        if (gdx <= 1 && gdy <= 1 && !(gdx == 0 && gdy ==0)) {
          if (player.move({gx, gy, testMovement: true})) tile.setHighlight()
        }
      }
    }
  }
}








//
