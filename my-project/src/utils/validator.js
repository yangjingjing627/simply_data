import { Notifiy } from './toast.js'
// 正整数
// const validator = {
//   isInteger (val) {
//     return (/^(-?[1-9]\d*|0)$/.test(val))
//   }
// }
// var validator = {
//   enAndZn: function (val) {
//     return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(val)
//   },
//   isInteger: function (val) {
//     return (/^(-?[1-9]\d*|0)$/.test(val))
//   },
//   posinteger: function (val) {
//     return /^[0-9]*[1-9][0-9]*$/.test(val)
//   },
//   posMoney: function (val) {
//     return /^(0|[1-9][0-9]{0,9})(\.[0-9]{1,2})?$/.test(val)
//   },
//   vphone: function (val) {
//     return /^1[34578]\d{9}$/.test(val)
//   },
//   vdPhone: function (val, text) {
//     if (/^1[34578]\d{9}$/.test(val)) {
//       return true
//     } else {
//       Notifiy('提示', '请输入正确的' + (!text ? '手机号' : text), 'info')
//       return false
//     }
//   },
//   vdEmail: function (val, text) {
//     if (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)) {
//       return true
//     } else {
//       Notifiy('提示', '请输入正确的' + (!text ? '邮箱' : text), 'info')
//       return false
//     }
//   },
//   vemail: function (val) {
//     return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)
//   }
// }

// 正整数
export function isInteger (val) {
  return /^(-?[1-9]\d*|0)$/.test(val)
}
export function isNum (val) {
  return /^[0-9]{18}$/.test(val)
}
// int型大于0
export function posinteger (val) {
  return /^[0-9]*[1-9][0-9]*$/.test(val)
}
export function posintegerone (val) {
  return /^[1-9]*[1-9][0-9]*$/.test(val)
}
// 包括0的正整数
export function Integer (val) {
  return /^0$|^\+?[1-9]\d*$/.test(val)
}

// 钱类型
export function posMoney (val) {
  return /^(0|[1-9][0-9]{0,9})(\.[0-9]{1,2})?$/.test(val)
}

// 手机号
export function vphone (val) {
  return /^1[34578]\d{9}$/.test(val)
}
// 判断是不是汉字
export function isChinese (val) {
  return /^[\u4E00-\u9FA5]$/.test(val)
}
// 只能是汉字 不能超过4个汉字
export function vChinesefour (val) {
  return /^[\u4E00-\u9FA5]{0,4}$/.test(val)
}
// 只能是汉字 不能超过12个汉字
export function vChineseTve (val) {
  return /^[\u4E00-\u9FA5]{0,12}$/.test(val)
}
// 只能是汉字 不能超过10个汉字
export function vChineseTen (val) {
  return /^[\u4E00-\u9FA5]{0,10}$/.test(val)
}
// 只能是汉字 不能超过6个汉字
export function vChineseSix (val) {
  return /^[\u4E00-\u9FA5]{0,6}$/.test(val)
}
// 仅限1～99的正整数不能0开头
export function OneToNine (val) {
  return /^[1-9][\d]{1,2}/.test(val)
}
// 手机号－带提示
export function vdPhone (val, text) {
  if (/^1[34578]\d{9}$/.test(val)) {
    return true
  } else {
    Notifiy('提示', '请输入正确的' + (!text ? '手机号' : text), 'info')
    return false
  }
}
// 邮箱－带提示
export function vdEmail (val, text) {
  if (/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)) {
    return true
  } else {
    Notifiy('提示', '请输入正确的' + (!text ? '邮箱' : text), 'info')
    return false
  }
}
// 邮箱
export function vemail (val) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(val)
}

// 6-20位数字和字母组合
export function enAndZn (val) {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(val)
}
// 4-20位英文和字母组合
export function enAndZnFour (val) {
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{4,20}$/.test(val)
}

export function removeArray (val) {
  var index = this.indexOf(val)
  if (index > -1) {
    this.splice(index, 1)
  }
}

// export default validator
