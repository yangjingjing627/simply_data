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
// import { Notifiy, loading, loadingHide } from './utils/toast'
// import encrypt from './utils/encrypt.js'
// import { trim } from './utils/common.js'

import './style/app.scss'
import './script/app.js'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Vuex)

// 提供公用的vueResource方法
// Vue.http.options.emulateJSON = true
// Vue.http.interceptors.push((request, next) => {
//   // Vue.http.headers.common = {}
//   // 这里解决跨域问题
//   request.credentials = true
//   let noLoading = ''
//   var _request = {}
//   if (request.method === 'POST') {
//     noLoading = request.body.noLoading
//     for (var j in request.body) {
//       _request[j] = request.body[j]
//     }
//   } else {
//     noLoading = request.params.noLoading
//     for (var k in request.params) {
//       _request[k] = request.params[k]
//     }
//   }
//   // console.log('_request', noLoading)
//   // 加loading参数
//   if (!noLoading) {
//     loading()
//   }
//   // Vue.http.options.xhr = { withCredentials: true }
//   // let app = document.getElementById('app')
//   // sasa({target: app})
//   // 请求发送前的处理逻辑
//   var _token = '6qvlkh6khz'
//   var localStorage = window.localStorage
//   if (localStorage && localStorage.userInfo && !_request.token) {
//     var userInfo = JSON.parse(localStorage.userInfo)
//     _request.uid = userInfo.uid
//     _token = userInfo.token
//   }
//   // 删除为空的参数
//   var _params = {}
//   for (var i in _request) {
//     // token 为 999999 的 不需要传uid
//     if (_request[i] === '999999' && i === 'token') {
//       _request.uid = ''
//       _token = '6qvlkh6khz'
//     }
//     // 先去掉前后空格
//     if (typeof (_request[i]) === 'string') {
//       _request[i] = trim.allTrim(_request[i])
//     }
//     if ((_request[i] !== undefined && _request[i] !== '' && _request[i] !== null) &&
//     (i !== 'token') && i !== 'noLoading') {
//       // 中文encodeURIComponent
//       if (/[+\u4e00-\u9fa5]/gm.test(_request[i])) {
//         _params[i] = encodeURIComponent(_request[i])
//       } else {
//         _params[i] = _request[i]
//       }
//     }
//   }
//   _request = _params
//   _request.salt = encrypt.sign(_request, _token)
//   if (request.method === 'POST') {
//     request.body = _request
//   } else {
//     request.params = _request
//   }
//   // token加密
//   // _request.token = userInfo.token
//   next((response) => {
//     // 修改response.data
//     // console.log('--noLoading', noLoading)
//     if (!noLoading) {
//       loadingHide()
//     }
//     if (response.data) {
//       switch (response.data.code) {
//         case '1':
//           // 返回正确
//           response.code = response.data.code
//           response.data = response.data.data
//           break
//         case 'TOKENINVALID_999':
//           // 说明token过期，需要重新登录
//           window.location.href = '/login'
//           break
//         case '6302':
//           // 主体信息不完整 弹框添加主体信息
//           store.commit('GET_MAIN_STATUS', true)
//           break
//         default:
//           if (response.data.message || response.data.code) {
//             response.message = response.data.message || '请求出错'
//             response.code = response.data.code
//             Notifiy('错误', response.message, 'error')
//           } else {
//             // 下载文件，如果是Blob类型数据，则是下载
//             if (response.data && response.data.type === 'application/form-data') {
//               response.data = response.url
//               response.code = '0'
//             }
//           }
//       }
//     } else {
//       Notifiy('错误', '请求出错', 'error')
//       response.code = '222222'
//     }
//   })
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
