import $ from 'jquery'
import encrypt from './encrypt.js'
import { trim } from './common.js'
import { Notifiy, loading, loadingHide } from './toast'

var httpBasic = function (type) {
  return function (opts) {
    if (!opts.params.noLoading) {
      loading()
    }
    var _token = '6qvlkh6khz'
    var localStorage = window.localStorage
    if (localStorage && localStorage.userInfo && !opts.params.token) {
      var userInfo = JSON.parse(localStorage.userInfo)
      opts.params.uid = userInfo.uid
      _token = userInfo.token
    }

    // 删除为空的参数
    var _params = {}
    for (var i in opts.params) {
      // token 为 999999 的 不需要传uid
      if (opts.params[i] === '999999' && i === 'token') {
        opts.params.uid = ''
        _token = '6qvlkh6khz'
      }
      // 先去掉前后空格
      if (typeof (opts.params[i]) === 'string') {
        opts.params[i] = trim.allTrim(opts.params[i])
      }
      if ((opts.params[i] !== undefined && opts.params[i] !== '' && opts.params[i] !== null) &&
      (i !== 'token') && i !== 'noLoading') {
        // 中文encodeURIComponent
        if (/[+\u4e00-\u9fa5]/gm.test(opts.params[i])) {
          _params[i] = encodeURIComponent(opts.params[i])
        } else {
          _params[i] = opts.params[i]
        }
      }
    }
    opts.params = _params
    // token加密
    opts.params.salt = encrypt.sign(opts.params, _token)
    var url = opts.url
    var _async = true
    if (opts.async === 'false') {
      _async = false
    }
    $[type]({
      url: url,
      data: opts.params,
      dataType: 'json',
      // async: opts.async,
      async: _async,
      beforeSend: function (xhr) {
        // xhr.setRequestHeader('Access-Control-Allow-Origin', 'http://192.168.1.66:8087')
      },
      xhrFields: {
        withCredentials: true
      },
      // crossDomain: true,
      success: function (res) {
        if (res.code === '0') {
          opts.success && opts.success(res)
        } else if (res.message) {
          Notifiy('错误', res.message, 'error')
        } else {
          Notifiy('错误', '请求出错', 'error')
        }
      },
      error: function (err) {
        opts.error && opts.error(err)
      },
      complete: function (XMLHttpRequest, status) {
        if (status === 'timeout' && !opts.noToast) {
          Notifiy('错误', '请求超时', 'error')
        }
        loadingHide()
        opts.complete && opts.complete(status)
      }
    })
  }
}

var httpGet = httpBasic('get')
var httpPost = httpBasic('post')

export {
  httpGet,
  httpPost
}
