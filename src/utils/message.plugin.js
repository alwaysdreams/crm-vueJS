export default {
  install (Vue, options) {
    Vue.prototype.$message = function (html) {
      // eslint-disable-next-line
      M.toast({ html })
    }

    Vue.prototype.$error = function (text) {
      // eslint-disable-next-line
      M.toast({ html: `[Error]: ${text}` })
    }
  }
}
