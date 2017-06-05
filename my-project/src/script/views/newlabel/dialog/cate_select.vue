<template>
<div class="cate">
  <div class="select-common-el">
    <el-select v-model="cate1" placeholder="选择一级分类" @change="cate1Select">
      <el-option v-for="item in cate_list1" :label="item.cateName" :value="item.cateId">
      </el-option>
    </el-select>
  </div>
  <div class="select-common-el">
    <el-select v-model="cate2" placeholder="选择二级分类" @change="cate2Select">
      <el-option v-for="item in cate_list2" :label="item.cateName" :value="item.cateId">
      </el-option>
    </el-select>
  </div>
  <div class="clear"></div>
</div>
</template>
<script>
export default {
  data: function () {
    return {
      cate_list1: [],
      cate_list2: [],
      cate1: '',
      cate2: ''
    }
  },
  mounted () {
    this.categoryList()
  },
  computed: {},
  methods: {
    cate1Select () {
      this.cate2 = ''
      this.cate_list2 = [{cateId: '', cateName: '选择二级分类'}]
      for (var i = 0; i < this.cate_list1.length; i++) {
        if (this.cate_list1[i].cateId === this.cate1) {
          this.cate_list2 = this.cate_list1[i].cateList
        }
      }
      this.$emit('cateSelectFun', this.cate1, this.cate2)
    },
    cate2Select () {
      this.$emit('cateSelectFun', this.cate1, this.cate2)
    },
    categoryList () {
      var self = this
      self.$http.get(API.goodsCategoryList, {params: {}}).then((res) => {
        if (res.data.length > 0) {
          res.data.unshift({cateId: '', cateName: '选择一级分类', cateList: []})
        }
        for (var i = 0; i < res.data.length; i++) {
          if (res.data[i].cateList.length > 0) {
            res.data[i].cateList.unshift({cateId: '', cateName: '选择二级分类', cateList: []})
          } else {
            res.data[i].cateList = []
            res.data[i].cateList.unshift({cateId: '', cateName: '选择二级分类', cateList: []})
          }
        }
        self.cate_list1 = res.data
      })
    }
  },
  components: {}
}
</script>
<style lang="less" scoped>
@import '../../style/variables.less';
.select-common-el{
  width: 130px;
  float: left;
  margin-right: 10px;
}
</style>
