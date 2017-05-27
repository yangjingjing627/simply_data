<template>
  <div id="side-bar">
    <div class="side-menu">
      <ul>
        <li v-for="item,index in list" :class="{active: item.style === toPath}">
          <router-link :to="item.url" >{{ item.name }}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import API from '../../../store/api.js'
export default {
  name: '',
  data () {
    return {
      toPath: '',
      list: [{
        name: '本周',
        style: 'province',
        url: '/province',
        active: true,
        show: false,
        id: 1,
        tags: []
      },
      {
        name: '今日订单',
        style: 'orders',
        url: '/orders',
        active: true,
        show: false,
        id: 2,
        tags: []
      },
      {
        name: '今日结算单',
        style: 'sales',
        url: '/sales',
        active: true,
        show: false,
        id: 3,
        tags: []
      },
      {
        name: '统计数据',
        style: 'exe',
        url: '/exe',
        active: true,
        show: false,
        id: 4,
        tags: []
      }],
      type: '',
      array: [ 1.2, 4, 5, 6 ]
    }
  },
  created () {
    this.sel()
    this.active()
  },
  mounted: function () {
    // do something after mounting vue instance
    this.init()
  },
  methods: {
    init () {
      this.toPath = window.location.pathname.substr(1).split('/')[0].replace(/\?\S+/, '')
      console.log(this.toPath + '-----init----')
    },
    authorityGet () {
      var self = this
      self.$http.get(API.authorityGet, {params: {}}).then((res) => {
        if (res.code === '0') {
          var _auth = []
          for (var i = 0; i < res.data.length; i++) {
            _auth.push(res.data[i].id)
          }
          window.sessionStorage.userAuthList = JSON.stringify(_auth)
        }
      })
    },
    sel () {
      var self = this
      const pi = 3.1415
      for (let i = 0; i < self.array.length; i++) {
        console.log('sel')
        console.log(pi + '---')
      }
    },
    active () {
      var self = this
      self.type = location.hash.substr(2).split('/')[0].replace(/\?\S+/, '')
    }
  },
  wacth: {
    '$route' (to, from) {
      this.toPath = to.path.substr('/')[0].replace(/\?\S+/, '')
      console.log(this.toPath + '-----wacth----')
      console.log('------route------')
    }
  },
  beforeDestroy () {
    delete window.sessionStorage.userAuthList
  }
}
</script>
<style lang='scss' scoped>

</style>
