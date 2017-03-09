var tplTopbar = require('../../views/common/topbar.vue')
import commonUtil from '../utils/commonUtil'
commonUtil.render(tplTopbar)
var Vue = require('../libs/vue.js')

new.Vue({
  el: '#app',
  data: {
    message: 'aaa'
  }
})

export default {
  name: 'tplTopbar',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      var self = this
      var url = '/login'
      self.$router.push(url)
    }
  }
}
