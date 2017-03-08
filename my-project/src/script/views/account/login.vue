<template>
  <div id="login">
    <div id="login-wrap">
  		<form class="login">
  			<div class="logo">好升益数据查询平台</div>
  			<input id="username" type="text" placeholder="账号/手机号" maxlength="12">
  			<input id="password" type="password"  placeholder="密码" maxlength="12">
  			<button class="login-btn" @click="login">登录</button>
  			<div class="tips">
  				<a class="left" href="#/license-key">开店</a>
  				<a class="right" href="#/find-password">找回店主密码</a>
  			</div>
  		</form>
  		<div class="warning" id="login-warning" style="display:none">
  			<h2>提示</h2>
  			<p>账号或密码错误。如果使用员工账号登录，请确保该收银机已绑 定至账号所属店铺。修改绑定请用店主账号登录并在“店铺资料” 处绑定。</p>
  			<a class="red-box">知道了</a>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  methods: {
    login () {
      var self = this
      var url = '/province'
      self.$router.push(url)
    }
  }
}
</script>
<style>

</style>
