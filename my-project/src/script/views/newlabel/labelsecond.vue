<template>
<div class="catesecond">
  <div class="labe-top">
    <h3>选择协议合同包含的商品</h3>
    <span class="button1 label-select" @click="selectmore()">选择商品</span>
    <span class="goodnum">你的等级目前最多允许添加 <i>{{ labelValue.cateTagGoodsCount }}</i> 个商品，已选择添加到该分类标签中的商品数：<i>{{ list.length }}</i></span>
  </div>
  <div class="content">
    <ul class="table-ul-common">
      <li id="header">
        <span>商品图片</span>
        <span>商品名称</span>
        <span>商品条码</span>
        <span>规格</span>
        <span>单位</span>
        <span>订货倍数</span>
        <span>供货价</span>
        <span>可售库存</span>
        <span>操作</span>
      </li>
      <li v-for="item,index in list">
        <span class="img">
            <img :src="item.defaultImage"/>
        </span>
        <span>{{ item.goodsName }}</span>
        <span>{{ item.sku }}</span>
        <span>{{ item.specName1 }}</span>
        <span>{{ item.specName2 }}</span>
        <span>{{ item.orderUnit }}</span>
        <span>{{ item.price }}</span>
        <span>{{ item.saleStock }}</span>
        <span class="operation">
          <a @click="remove(item, index)">移除</a>
        </span>
      </li>
      <li v-if="list.length <= 0">暂未选择添加任何商品</li>
    </ul>
  </div>
  <div class="bottom">
    <a class="button-cancel" @click="cancel">取消</a>
    <a class="button1" @click="before">上一步</a>
    <a class="button1" @click="save">确定并保存</a>
  </div>
  <selectadd v-if="add_show" @closeDialog = "closeDialog" @cateAllinit = "cateAllinit" :labelValue="labelValue"></selectadd>
</div>
</template>
<script>
import selectadd from './dialog/selectadd'
import { Notifiy } from '../../../../utils/toast.js'
export default {
  data: function () {
    return {
      crumbs: {
        list: [
          {name: '交易管理', go: 0},
          {name: '订货管理', go: 0}
        ]
      },
      list: [],
      add_show: false,
      params: {},
      labelValue: {
        status: 0,
        cateTagGoodsCount: 0,
        list: 0
      },
      cateTagId: this.$route.params.cateTagId
    }
  },
  mounted () {
    if (this.$route.params.cateTagId === 'add') { // 新增
      this.cateTagId = ''
    }
    this.cateAllinit()
  },
  computed: {
  },
  methods: {
    cateAllinit () {
      var self = this
      self.$http.get(API.cateAddOrEditCreateCache, {params: {}}).then((res) => {
        if (res.code === '0') {
          self.list = res.data.goodsList
          self.labelValue.cateTagGoodsCount = res.data.cateTagGoodsCount
          self.labelValue.list = self.list.length
        }
      })
    },
    selectmore () {
      this.add_show = true
      let goodsIds = {}
      for (var i = 0; i < this.list.length; i++) {
        goodsIds[this.list[i].goodsId] = true
      }
      this.$store.commit('GET_LABEL_GOODS', goodsIds)
    },
    closeDialog () {
      this.add_show = false
    },
    before () {
      this.$emit('changeCurrent')
      // this.$emit('cateSecondNext')
    },
    cancel () {
      this.$router.replace('/product/catelabel')
    },
    save () {
      let self = this
      // 如果未选择商品提示选择
      if (self.list.length < 1) {
        Notifiy('提示', '你没有添加商品，请选择商品后再保存！', 'info')
      } else {
        self.$http.post(API.cateAddOrEditSaveCommit, {}).then((res) => {
          if (res.code === '0') {
            Notifiy('成功', '保存成功', 'success')
            this.$router.replace('/product/catelabel')
          }
        })
      }
    },
    remove (item, index) {
      let self = this
      self.$confirm('你确定要移除该商品吗?', '提示', {
        type: 'info'
      }).then(() => {
        self.$http.post(API.cateAddOrEditRemovedGoods, {goodsId: item.goodsId}).then((res) => {
          if (res.code === '0') {
            self.list.splice(index, 1)
          }
        })
      }).catch(() => {
      })
    }
  },
  components: {
    'selectadd': selectadd
  }
}
</script>
<style lang="less" scoped>
@import '../../../../style/variables.less';
.catesecond {
    width: 100%;
    .labe-top{
      width:100%;
      height: 125px;
      padding-top:30px;
      padding-bottom: 30px;
      h3{
        font-size: 16px;
        color: #555;
        padding-bottom: 20px;
      }
      .label-select{
        width: 120px;
        float: left;
        cursor: pointer;
      }
      .goodnum{
        font-size: 14px;
        color: #555;
        line-height: 35px;
        margin-left: 20px;
        i{
          color: @yellow;
        }
      }
    }
    .content {
        width: 100%;
        margin-top: 5px;
        max-height: 600px;
        overflow-y: auto;
        .border-shadow;
        ul {
            li#header {
                height: 40px;
                line-height: 20px;
                padding: 10px 10px 10px 10px;
            }
            li {
                // height: 80px;
                padding: 10px;
                // line-height: 32px;
                color: #555;
                span:nth-child(1) {
                    width: 13%;
                }
                span:nth-child(2) {
                    width: 13%;
                }
                span:nth-child(3) {
                    width: 10%;
                }
                span:nth-child(4) {
                    width: 7%;
                }
                span:nth-child(5) {
                    width: 7%;
                }
                span:nth-child(6) {
                    width: 10%;
                }
                span:nth-child(7) {
                    width: 8%;
                }
                span:nth-child(8) {
                    width: 10%;
                }
                span:nth-child(9) {
                    width: 15%;
                }
            }
            .img {
                width: 100%;
                height: 80px;
                img {
                    max-width: 100%;
                    height: 100%;
                    margin: 0 auto;
                }
            }
        }
    }
    .catepage{
      position: absolute;
      bottom: 50px;
      left: 30%;
    }
    .bottom{
      padding: 50px 0;
      text-align: center;
      a{
        display: inline-block;
        margin: 0px 30px 0 0px;
        width: 120px;
      }
    }
}
</style>
