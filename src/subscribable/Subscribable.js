export default ({ base = class {} }) => class extends base {
  // Prepare is used for setting up dependencies prior to starting.
  subscribePrepare (callback) {
    if (!this.prepareListeners) this.prepareListeners = []
    this.prepareListeners.push(callback)
  }
  publishPrepare (opts) {
    if (!this.prepareListeners) return
    for (const callback of this.prepareListeners) callback(opts)
  }

  // Start is called once objects are ready.
  subscribeStart (callback) {
    if (!this.startListeners) this.startListeners = []
    this.startListeners.push(callback)
  }
  publishStart (opts) {
    if (!this.startListeners) return
    for (const callback of this.startListeners) callback(opts)
    this.started = true
  }

  // Update is called once per game step once objects are ready.
  subscribeUpdate (callback) {
    if (!this.updateListeners) this.updateListeners = []
    this.updateListeners.push(callback)
  }
  publishUpdate (opts) {
    if (!this.started) return
    if (!this.updateListeners) return
    for (const callback of this.updateListeners) callback(opts)
  }
}
