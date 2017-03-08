<template>
  <div id="topbar">
    <div id="page-title">
			<div class="title">
				<a class="back">好升益数据查询平台</a>

			</div>
		</div>
		<div class="page-sunhead">
			<div class="welcome">
				拥有数据就是拥有价值,欢迎您:
			</div>
			<div class="username">
				<a href="javascript:void(0);">猴子哥哥</a>
				<div class="right-tip" @click="logout">
					退出
				</div>
			</div>
		</div>
  </div>
</template>
<script>
export default {
  name: 'topbar',
  data () {
    return {
    }
  },
  methods: {
    logout () {
      var self = this
      var url = '/login'
      self.$router.push(url)
    }
  }
}
</script>
<style>

</style>
