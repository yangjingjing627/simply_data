import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import main from './modules/main.info'
import label from './modules/label'
import helporder from './modules/helporder'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    main,
    label,
    helporder
  }
})
