<template>
  <div id="side-bar">
    <div class="side-menu">
      <ul>
        <li
        class="{ active: type=='province'||type==''}">
  					<router-link to='/province'>
              各省店铺统计
  					</router-link>
  				</li>
          <li
          class="{ active: type=='sales'||type==''}">
    					<router-link to='/sales'>
                近七天结算单统计
    					</router-link>
  				</li>
          <li
          class="{ active: type=='orders'||type==''}">
  					<router-link to='/orders'>
              近七天订单统计
  					</router-link>
  				</li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      messages: [
        { msg: '各省店铺统计', link: '/province' },
        { msg: '近七天结算单统计', link: '/sales' },
        { msg: '近七天结算单统计', link: '/orders' }
      ]
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
