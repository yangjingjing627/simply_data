<template>
<div class="dialog modal">
  <div class="dialog-content">
    <h3>添加商品</h3>
    <div>
      <div class="header-search-common">
        <div class="input">
          <input type="text" class="common-input" placeholder="输入产品名称／产品条码" v-model="params.parameter">
        </div>
        <div class="cate-select">
          <cate-select v-on:cateSelectFun="cateSelectFun"></cate-select>
        </div>
        <div class="search">
          <a class="button2" @click="search">搜索</a>
        </div>
        <div class="clear"></div>
      </div>
      <div class="select-opt">
        <span @click="selectAllGoods()">
          <i class="select" :class="{ selected:selectall }"></i>
          全选
        </span>
        <!-- <span @click="noselectall()">
          <i class="select" :class="{ selected: noSelect }"></i>
          反选
        </span> -->
        <span class="select-text">
          *你的等级目前最多允许添加<span class="goodcolor">{{ this.labelValue.cateTagGoodsCount }}</span>个商品，已选择添加到该分类标签中的商品数<span class="goodcolor">{{ this.labelValue.list }}</span>个商品
          <!-- *你的等级目前最多允许添加 <i>{{ labelValue.cateTagGoodsCount }}</i> 个商品，已选择添加到该分类标签中的商品数：<i>{{ list.length }}</i>！ -->
        </span>{{ getLabel }}
      </div>
      <div class="content">
        <ul class="table-ul-common">
          <li id="header">
            <span>选择</span>
            <span>商品图片</span>
            <span>商品名称</span>
            <span>商品条码</span>
            <span>规格</span>
            <span>单位</span>
            <span>订货倍数</span>
            <span>供货价</span>
            <span>可售库存</span>
          </li>
          <li v-for="item,index in list">
            <span class="select" :class="{selected: goodsIds[item.goodsId]}" @click="selectIndex(item, goodsIds[item.goodsId])"></span>
            <span class="img">
          <img :src="item.defaultImage" alt="">
        </span>
            <span>{{ item.goodsName }}</span>
            <span>{{ item.sku }}</span>
            <span>{{ item.specName1 || '无' }}</span>
            <span>{{ item.specName2 || '无' }}</span>
            <span>{{ item.orderUnit }}</span>
            <span>{{ item.price }}</span>
            <span>{{ item.saleStock }}</span>
          </li>
          <li v-if="list.length <= 0">暂无商品</li>
        </ul>
        <div class="pages" v-if="total > 0">
          <el-pagination @current-change="handleCurrentChange" layout="prev, pager, next" :total="total" :current-page="params.page">
          </el-pagination>
          <div class="all-total">
            每页显示{{ params.pageSize }}条 共计{{ total }}条数据
          </div>
        </div>
      </div>
      <div class="add-bottom">
        <a class="button-cancel" @click="cancel()">取消</a>
        <a class="button1" @click="sure()">保存</a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import cateSelect from './cate_select'
import { mapGetters, mapActions } from 'vuex'
// import { Notifiy } from '../../../../../utils/toast.js'

export default {
  data: function () {
    return {
      total: 0,
      list: [],
      historyGoods: {},
      cateTagId: this.$route.params.cateTagId,
      params: {
        page: 1,
        pageSize: 10,
        parameter: '',
        cateId1: '',
        cateId2: ''
      }
    }
  },
  props: ['labelValue'],
  mounted () {
    this.cateAddinit()
    // 纪录第一次打开 选中的商品
    this.historyGoods = this.goodsIds
  },
  computed: {
    ...mapGetters({
      goodsIds: 'getLabelGoods',
      selectall: 'getLabelSelectAll'
    })
  },
  methods: {
    ...mapActions({
      getSelectAll: 'getSelectAll',
      updateSelectAll: 'updateSelectAll'
    }),
    handleCurrentChange (val) {
      this.params.page = val
      this.cateAddinit()
    },
    cateAddinit () {
      var self = this
      self.$http.get(API.cateAddOrEditGetAllGoods, {params: self.params}).then((res) => {
        if (res.code === '0') {
          self.list = res.data.list
          this.getSelectAll(self.list)
          self.allTotal = res.data.total
          self.total = (res.data.total / res.data.size) * 10
        }
      })
    },
    cateSelectFun (cate1, cate2) {
      this.params.cateId1 = cate1
      this.params.cateId2 = cate2
    },
    search () {
      this.params.page = 1
      this.cateAddinit()
    },
    sure () {
      var params = {
        jsonData: []
      }
      for (var i in this.goodsIds) {
        if (this.goodsIds[i]) {
          params.jsonData.push(i)
        }
      }
      let limitLength = this.labelValue.cateTagGoodsCount
      var nowLength = params.jsonData.length
      if (params.jsonData.length > 200) {
        // Notifiy('提示', '最多添加' + limitLength + '个商品，您已选中' + nowLength + '个商品', 'info')
        return
      }
      params.jsonData = JSON.stringify(params.jsonData)
      let url = API.cateAddOrEditAddGoods
      // this.labelValue.status === 1 说明是 从分类标签－查看商品 －添加商品打开
      // this.labelValue.status === 0 说明是 从分类标签－新增／编辑－添加商品打开
      if (this.labelValue.status === 1) {
        params.cateTagId = this.cateTagId
        url = API.cateLookAddGood
      }
      this.$http.post(url, params).then((res) => {
        if (res.code === '0') {
          this.$emit('cateAllinit')
          this.$emit('closeDialog')
        }
      })
    },
    cancel () {
      this.$emit('closeDialog')
    },
    selectAllGoods () {
      this.updateSelectAll(this.list)
    },
    selectIndex (item, status) {
      let _goods = {
        ...this.goodsIds
      }
      _goods[item.goodsId] = !status
      this.$store.commit('GET_LABEL_GOODS', _goods)
      this.getSelectAll(this.list)
    }
  },
  components: {
    'cate-select': cateSelect
  },
  beforeDestroy () {
    // 弹框关闭时 清除之前选中的状态
    this.$store.commit('GET_LABEL_GOODS', this.historyGoods)
  }
}
</script>
<style lang="less" scoped>
@import '../../../../../style/variables.less';
.dialog-content{
  width: 1060px;
    .header-search-common {
        width: 100%;
        padding-left: 14px;
        padding-right: 14px;
        padding-top: 21px;
        // overflow: hidden;
    }
    .content {
        width: 100%;
        max-height: 412px;
        overflow-y: auto;
        margin-top: 5px;
        .border-shadow;
        // padding-bottom: 92px;
        ul {
            li#header {
                height: 40px;
                line-height: 20px;
            }
            li {
                padding: 10px;
                // line-height: 80px;
                color: #555;
                span:nth-child(1) {
                  width: 4%;
                }
                span:nth-child(2) {
                    width: 8%;
                  &.img{
                    img{
                      width: 60px;
                      height: 60px;
                      margin: 0 auto;
                    }
                  }
                }
                span:nth-child(3) {
                    width: 9%;
                }
                span:nth-child(4) {
                    width: 10%;
                }
                span:nth-child(5) {
                    width: 8%;
                }
                span:nth-child(6) {
                    width: 6%;
                }
                span:nth-child(7) {
                    width: 6%;
                }
                span:nth-child(8) {
                    width: 8%;
                }
                span:nth-child(9) {
                    width: 6%;
                }
            }
        }
    }
    .add-bottom{
      width: 100%;
      height: 92px;
      background: #fff;
      border-top: 1px dashed #cdcdcd;
      padding-left: 350px;
      a{
        display: inline-block;
        margin: 30px 30px 0 0px;
        width: 120px;
      }
    }
}
.select-opt{
  display: inline-block;
  width: 100%;
  height: 52px;
  line-height: 52px;
  color: #666;
  font-size: 14px;
  span{
    display: inline-block;
    padding-left: 22px;
    position: relative;
    i{
      display: inline-block;
      width: 12px;
      height: 12px;
    }
  }
  .select-text{
    margin-left: 60px;
    font-size: 12px;
    color: #555;
    .goodcolor{
      color: @yellow;
      padding-left: 0;
    }
  }
}
.select{
  background: url(../../../../../assets/my-noselect.png) center no-repeat;
  background-size: 12px;
  cursor: pointer;
}
.select.selected{
  background: url(../../../../../assets/my-select.png) center no-repeat;
  background-size: 12px;
}
.pages{
  padding-bottom: 10px;
  margin-top: 20px;
}
.pages .el-pagination {
    background: #fff;
}
</style>
