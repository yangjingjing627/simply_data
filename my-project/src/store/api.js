var iposHeader = 'http://dev.admin.ipos100.cn/admin'// pos测试环境地址,现在
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
