// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
// import echarts from 'echarts'
import './style/app.scss'
import './script/app.js'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
