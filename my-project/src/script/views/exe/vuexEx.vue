<template>
  <div id="" class="right-side">
    dbcujdv 是你曾经可能达成
    <ul>
      <span v-for="item in order">{{ item.goods }}</span>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      'order': [
        {'goods': '旺旺口香糖'},
        {'goods': '旺旺口香糖'},
        {'goods': '旺旺口香糖'},
        {'goods': '旺旺口香糖'}
      ]
    }
  }
}
</script>
<style>
</style>
