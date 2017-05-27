import Vue from 'vue'
import Router from 'vue-router'
import Sidebar from '../script/views/common/sidebar.vue'
import Login from '../script/views/account/login.vue'
import Province from '../script/views/province.vue'
import Sales from '../script/views/sales.vue'
import Orders from '../script/views/orders.vue'
import Exe from '../script/views/exe.vue'
import Eleui from '../script/views/exe/element.vue'
import VuexEx from '../script/views/exe/vuexEx.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Sidebar',
      component: Sidebar,
      children: [
        { path: '/login', component: Login },
        { path: '/province', component: Province },
        { path: '/sales', component: Sales },
        { path: '/orders', component: Orders },

        { path: '/exe', component: Exe },
        { path: '/sales/exe', component: Exe },
        { path: '/orders/exe', component: Exe },

        { path: '/exe', component: Exe },
        { path: '/exe/ele', component: Eleui },
        { path: '/exe/vuexEx', component: VuexEx }
      ]
    }
  ]
})
export default router
