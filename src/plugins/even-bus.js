const evenBus = {}
evenBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue()
}
export default evenBus
