var iposHeader = 'http://jingjing.ipos.com/admin'
// window.iposHeader = "http://dev.admin.ipos100.cn/admin"// pos测试环境地址,现在
// window.iposHeader = "https://admin.ipos100.cn/admin"// 正式环境地址,现在
// window.iposHeader = "https://pos.ipos100.cn/pos"// 正式环境
// window.iposHeader = "http://116.62.8.82:8080/pos"//  测试环境IP(好升益服务器)
//  data/shift/list
var serverApi = {
  province: 'storedata/count/province',
  billCount: 'storedata/billcount/every',
  billAmount: 'storedata/billamount/every',
  orderCount: 'storedata/ordercount/every',
  orderAmount: 'storedata/orderamount/every',
  adminLogin: 'datalogin/submit',
  adminLogout: 'datalogout'
}
for (var i in serverApi) {
  serverApi[i] = iposHeader + '/' + serverApi[i]
}
module.exports = serverApi
