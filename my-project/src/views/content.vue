<template>
<div class="content">
  <span v-once>使用less测试。{{ msg }}</span>
  <p>
    {{ msg }}
  </p>
  <input v-model="msg" type="text" name="name" placehoder="edit me">
  </div>
</template>
<script>
// var data = { a: 1 };v-once仅绑定一次，数据再次变化它也不会改变
export default {
  name: 'content',
  data () {
    return {
      msg: 'Welcome to Your Content',
      a: 1
    }
  },
  created: function () {
    console.log('a is' + this.a)
  }
  // watch:('a',function () {
  //   console.log('------事件监听---------');
  // })
}
</script>
<style lang="scss" scoped>
  .content{
    width: 100%;
    height: 50px;
    background-color: red;
    list-style: none;
    color: red;
    font-size: 20px;
    span {
      color: tan;
      font-weight: bold;
    }
  }
</style>
