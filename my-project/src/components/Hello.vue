<template>
  <div class="hello">
    <h1>{{ author }}</h1>
    <content></content>
    <!-- <ul>
      <router-link to='/goods/content'>content</router-link>
      <router-link to='/goods/messages'>messages</router-link>
      <router-link to='/goods/world'>world</router-link>
      <router-link to='/goods/form'>FormTpl</router-link>
      <router-link to='/goods/tpl1'>FormTpl</router-link>
      <a id="shop" class="button1" @click="login">登录</a>
      <a id="shpp" class="button1" @click="logout">退出</a>
      <br>
    </ul>
    <router-view></router-view> -->
  </div>
</template>

<script>
import content from '../views/content.vue'
export default {
  name: 'hello',
  data () {
    return {
      author: '微信小程序'
    }
  },
  component: { content },
  methods: {
    login () {
      var self = this
      var url = '/goods/login'
      self.$router.push(url)
    },
    logout () {
      console.log('hdfjdk')
      var self = this
      var url = '/goods/messages'
      self.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#shop {
  color: red;
}
</style>
