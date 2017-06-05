import { GET_MAIN_STATUS } from '../mutations'
const state = {
  // 显示补全完整信息的弹框状态  默认不显示 当接口状态为6302 触发显示
  mainInfoShow: false
}

const mutations = {
  [GET_MAIN_STATUS] (state, value) {
    state.mainInfoShow = value
  }
}

export default {
  state,
  mutations
}
