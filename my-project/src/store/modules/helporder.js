import {
  GET_HELP_LISTSELECT
} from '../mutations'
const state = {
  selectList: []
}
const mutations = {
  [GET_HELP_LISTSELECT] (state, result) {
    state.selectList = result
  }
}
// let selected = true
const actions = {
  helpSelect ({
    commit,
    state
  }, helpselectlist) {
    // console.log(helpselectlist)
    // helpselectlist.forEach(function (goods) {
    //   helpselectlist[goods.goodsId] = !selected
    // })
    // commit(GET_HELP_SELECTED, { gethelpselected })
    commit(GET_HELP_LISTSELECT, { helpselectlist })
  }
}
const getter = {
  HelpOrderSelectList: state => {
    return state.selectList
  }
}
export default {
  state,
  mutations,
  actions,
  getter
}
