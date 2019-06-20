import Constants from './constants'

export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

// Convert a board coordinate (grid) into a screen coordinate (pixel).
// i.e. game (coordinate) to absolute (coordinate)
export function g2a (g) {
  return Constants.offset + Constants.tileSize * g
}

// Convert a screen coordinate (pixel) into a board coordinate (grid).
// i.e. absolute (coordinate) to game (coordinate)
export function a2g (a) {
  return Math.floor((a - Constants.offset) / Constants.tileSize)
}
