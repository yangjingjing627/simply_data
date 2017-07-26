import encrypt from './encrypt.js'
// import { httpGet } from './request.js'

var exportSalt = function (obj) {
  // console.log('----------------')
  var _token = '6qvlkh6khz'
  var localStorage = window.localStorage
  if (localStorage && localStorage.userInfo) {
    var userInfo = JSON.parse(localStorage.userInfo)
    obj.uid = userInfo.uid
    _token = userInfo.token
  }
  // console.log(obj)
  if (typeof (obj) === 'object') {
    var _obj = {}
    for (var i in obj) {
      if (obj[i] !== '') {
        _obj[i] = obj[i]
      }
    }
    // console.log(obj)
    _obj.salt = encrypt.sign(_obj, _token)
    var exportParams = '?'
    for (var j in _obj) {
      exportParams += j + '=' + _obj[j] + '&'
    }
    exportParams = exportParams.substring(0, exportParams.length - 1)
    // console.log('exportParams')
    // console.log(exportParams)
    return exportParams
  }
}
var trim = {
  allTrim: function (obj) { // 去掉所有空格
    if (typeof (obj) === 'string') {
      return obj.replace(/(^\s*)|(\s*$)/g, '')
    }
  },
  ltrim: function (obj) { // 去掉左边空格
    if (typeof (obj) === 'string') {
      return obj.replace(/(^\s*)/g, '')
    }
  },
  rtrim: function (obj) { // 去掉右边空格
    if (typeof (obj) === 'string') {
      return obj.replace(/(\s*$)/g, '')
    }
  }
}

// function getAuth (callback) {
//   httpGet({
//     url: API.authorityGet,
//     params: {},
//     async: 'false',
//     success: function (res) {
//       callback(res.data)
//     }
//   })
// }
var myAuth = function (id) {  // 根据权限来控制页面的哪些功能按钮是否存在
  // var ss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 32]
  if (window.sessionStorage.userAuthList) {
    var authlist = JSON.parse(window.sessionStorage.userAuthList)
    if (authlist.indexOf(id) > -1) {
      return true
    } else {
      return false
    }
  } else {
    var _hasauth = false
    // getAuth(function (data) {
    //   var _auth = []
    //   for (var i = 0; i < data.length; i++) {
    //     _auth.push(data[i].id)
    //   }
    //   window.sessionStorage.userAuthList = JSON.stringify(_auth)
    //   if (_auth.indexOf(id) > -1) {
    //     _hasauth = true
    //     return true
    //   } else {
    //     _hasauth = false
    //     return false
    //   }
    // })
    return _hasauth
  }
}

export {trim, exportSalt, myAuth}
// export function exportSalt (obj) {
//   console.log(typeof (obj))
//   var _token = '6qvlkh6khz'
//   var localStorage = window.localStorage
//   if (localStorage && localStorage.userInfo) {
//     var userInfo = JSON.parse(localStorage.userInfo)
//     obj.uid = userInfo.uid
//     _token = userInfo.token
//   }
//   if (typeof (obj) === 'object') {
//     var _obj = {}
//     for (var i in obj) {
//       if (obj[i] !== '') {
//         _obj[i] = obj[i]
//       }
//     }
//     _obj.salt = encrypt.sign(_obj, _token)
//     var exportParams = '?'
//     for (var j in _obj) {
//       exportParams += j + '=' + _obj[j] + '&'
//     }
//     exportParams = exportParams.substring(0, exportParams.length - 1)
//     return exportParams
//   }
// }
