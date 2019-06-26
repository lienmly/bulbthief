// Basically skip your turn.
export default class {
  // Always valid.
  isValid () {
    return true
  }
  // Return immediately.
  execute () {
    return Promise.resolve(true)
  }
}
