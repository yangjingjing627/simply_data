import { GET_LABEL_GOODS, GET_LABEL_SELECTALL } from '../mutations'
const state = {
  // 商品管理－分类标签－分类标签商品明细 －修改商品 goodsIds选择的商品ids key是goodsId value true/false
  goodsIds: {},
  selectAll: false
}

const mutations = {
  [GET_LABEL_GOODS] (state, value) {
    state.goodsIds = value
  },
  [GET_LABEL_SELECTALL] (state, value) {
    state.selectAll = value
  }
}

export default {
  state,
  mutations
}
