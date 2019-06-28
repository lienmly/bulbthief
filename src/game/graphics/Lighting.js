import Phaser from 'phaser'
import C from '../../constants'

export default class Lighting {
  constructor ({ game, state, scene }) {
    this.game = game
    this.state = state
    this.scene = scene

    this.setupLights()
  }

  setupLights () {
    // Enable the lights and add some ambient lighting.
    this.scene.lights.enable().setAmbientColor(0x303030)

    // Create some lights.
    // addLight takes: x, y, radius, color, intensity.
    // Create a light to focus the current player.
    this.playerLight = this.scene.lights.addLight(0, 0, 100000, 0xFFFFFF, 0.5)

    // Create some colored lights to spin around.
    const colors = [0xFF0000, 0x00FF00, 0x0000FF]
    this.numColorLights = 6
    this.colorLights = []
    this.colorLightSinDiv = []
    this.colorLightCosDiv = []
    for (let i = 0; i < 6; i++) {
      let light = this.scene.lights.addLight(0, 0, 100000, colors[i % colors.length], 1.1)
      this.colorLights.push(light)
      this.colorLightSinDiv.push(Phaser.Math.Between(500, 1000))
      this.colorLightCosDiv.push(Phaser.Math.Between(500, 1000))
    }

    // Track the pointer.
    this.pointerX = 0
    this.pointerY = 0

    this.scene.input.on('pointermove', (pointer) => {
      this.pointerX = pointer.x
      this.pointerY = pointer.y
    })

    // Listen for game updates.
    this.game.subscribeGameUpdate(({ time, delta }) => { this.updateLights({ time, delta }) })
  }

  updateLights ({ time, delta }) {
    this.updatePlayerLight({ time, delta })
    this.updateColorLights({ time, delta })
  }

  updatePlayerLight ({ time, delta }) {
    // Get the current player's position.
    const playerPos = this.state.getCurrentPlayer().getDrawPosition()

    // Get the direction in radians from the player to the cursor.
    const dir = Math.atan2(this.pointerY - playerPos.y, this.pointerX - playerPos.x)

    // Choose a distance based on tile size.
    const dist = C.tileSize * 1.2

    // Set the light to be this distance away from the player in that direction.
    this.playerLight.x = playerPos.x + Math.cos(dir) * dist
    this.playerLight.y = playerPos.y + Math.sin(dir) * dist
  }

  updateColorLights ({ time, delta }) {
    const center = (C.gameSize * C.tileSize) / 2
    for (let i = 0; i < this.numColorLights; i++) {
      const light = this.colorLights[i]
      light.x = center + Math.cos(time / this.colorLightCosDiv[i]) * center
      light.y = center + Math.sin(time / this.colorLightSinDiv[i]) * center
    }
  }
}
