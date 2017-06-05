import { GET_LABEL_SELECTALL, GET_LABEL_GOODS } from './mutations'

// 商品管理－分类标签－修改商品  选择商品全选状态的修改
export const updateSelectAll = ({ commit, state }, goodList) => {
  let goodsIds = {
    ...state.label.goodsIds
  }
  let selectall = state.label.selectAll
  goodList.forEach(function (goods) {
    goodsIds[goods.goodsId] = !selectall
  })
  commit(GET_LABEL_SELECTALL, !selectall)
  commit(GET_LABEL_GOODS, goodsIds)
}

export const getSelectAll = ({ commit, state }, goodList) => {
  let goodsIds = {
    ...state.label.goodsIds
  }
  let selectall = true
  for (var i = 0; i < goodList.length; i++) {
    if (!goodsIds[goodList[i].goodsId]) {
      selectall = false
      break
    }
  }
  commit(GET_LABEL_SELECTALL, selectall)
}
