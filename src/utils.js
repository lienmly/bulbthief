import Constants from './constants'

export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

// Convert a game coordinate into a screen coordinate.
// i.e. game (coordinate) to absolute (coordinate)
export function g2a(g) {
  return Constants.offset + Constants.tileSize * g
}

// Convert a screen coordinate into a game coordinate.
// i.e. absolute (coordinate) to game (coordinate)
export function a2g(a) {
  return Math.floor((a - Constants.offset) / Constants.tileSize)
}
