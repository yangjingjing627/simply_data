<template>
  <!-- <div id="side-bar"> -->
  <div id="side-yun">
    <div class="side-menu">
      <ul>
        <li v-for="item,index in list" :class="{active: item.style === toPath}">
          <div>
            <h4>{{ item.name }}</h4>
            <div class="tags">
              <span v-for="tag in item.tags"><router-link :to="tag.url" >{{ tag.tagname }}</router-link></span>
            </div>
          </div>
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
        name: '我是卖家',
        style: '',
        url: '/',
        active: true,
        show: false,
        id: 1,
        tags: []
      }, {
        name: '商品管理',
        style: 'province',
        url: '/province',
        active: false,
        show: false,
        id: 2,
        tags: [{
          tagname: '我要供货',
          url: '/province/exe',
          show: false,
          id: 3
        }, {
          tagname: '我的供货',
          url: '/province/exe',
          show: false,
          id: 4
        }, {
          tagname: '分类标签',
          url: '/province/exe',
          show: false,
          id: 22
        }]
      }, {
        name: '交易管理',
        style: 'sales',
        url: '/sales',
        active: false,
        show: false,
        id: 5,
        tags: [{
          tagname: '订货管理',
          url: '/sales/exe',
          show: false,
          id: 6
        }, {
          tagname: '退货管理',
          url: '/sales/exe',
          show: false,
          id: 7
        }, {
          tagname: '退款管理',
          url: '/sales/exe',
          show: false,
          id: 8
        }, {
          tagname: '已售商品',
          url: '/sales/exe',
          show: false,
          id: 9
        }
        // , {
        //   tagname: '代客下单',
        //   url: '/deal/helporder',
        //   show: false,
        //   id: 10
        // }
        ]}, {
          name: '我的钱包',
          style: 'orders',
          url: '/orders',
          active: false,
          show: false,
          id: 11,
          tags: [{
            tagname: '收支查询',
            url: '/orders/exe',
            show: false,
            id: 12
          }, {
            tagname: '账户余额',
            url: '/orders/exe',
            id: 13
          }, {
            tagname: '机构扣点',
            url: '/orders/exe',
            show: false,
            id: 21
          }]
        },
      {
        name: '我的云采',
        style: 'exe',
        url: '/exe',
        active: false,
        show: false,
        id: 17,
        tags: [{
          tagname: '主体信息',
          url: '/exe/exe',
          show: false,
          id: 18
        }, {
          tagname: '账号安全',
          url: '/exe/exe',
          show: false,
          id: 19
        }, {
          tagname: '子账号',
          url: '/exe/exe',
          show: false,
          id: 20
        }]
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
