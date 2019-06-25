import C from './constants'

// Returns true if a position is within the game board.
export function validPosition ({ x, y }) {
  return x >= 0 &&
         y >= 0 &&
         x < C.gameSize &&
         y < C.gameSize
}

// Convert a board coordinate (grid) into a screen coordinate (pixel).
// i.e. game (coordinate) to absolute (coordinate)
export function g2a (g) {
  return C.offset + C.tileSize * g
}

// Convert a screen coordinate (pixel) into a board coordinate (grid).
// i.e. absolute (coordinate) to game (coordinate)
export function a2g (a) {
  return Math.floor(((a + C.tileSize / 2) - C.offset) / C.tileSize)
}
