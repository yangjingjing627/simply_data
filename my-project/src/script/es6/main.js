let fruit = 'lemon'
let dessert = 'cake'

let getInfo = (msg) => {
  return `${fruit}, ${dessert}, ${msg}`
}

// export { fruit, dessert }
export default getInfo
// exports getInfo    报错
// 第二种方式暴露对象
// export default (msg) => {
//   return `${fruit}, ${dessert}, ${msg}`
// }
