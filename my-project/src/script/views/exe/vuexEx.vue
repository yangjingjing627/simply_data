<template>
<div id="vueEx" class="right-side">
  dbcujdv 是你曾经可能达成
  <ul>
    <li v-for="item in order">
      <div class="">{{ item.goods }}</div>
      <div class="" v-for="item_list in item.list">
        <select v-if="item_list.nn" class="" name="">
          <option v-for="item_1 in item_list.ll">{{ item_1.gg }}</option>
        </select>
        <span class='list-name'>{{ item_list.name }}</span>
        <span class='list-radio list-sel'></span>
        <span class='list-lock'></span>
      </div>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      'order': [{
        'goods': '会员优惠插件',
        'list': [{
          'nn': true,
          'll': [{
            'gg': '支付1'},
            {'gg': '支付1'},
            {'gg': '支付1'},
            {'gg': '支付1'}
          ],
          'name': '会员优惠',
          'radio': true,
          'lock': true
        }, {
          'nn': false,
          'name': '自动识别',
          'radio': true,
          'lock': false
        }, {
          'nn': false,
          'name': 'Apply Pay',
          'radio': true,
          'lock': false
        }, {
          'nn': false,
          'name': '微信支付',
          'radio': true,
          'lock': false
        }]
      }, {
        'goods': '银行卡',
        'list': [{
          'name': '退款',
          'radio': false,
          'lock': false
        }, {
          'name': '语音通知',
          'radio': true,
          'lock': false
        }]
      }]
    }
  }
}
</script>
<style>

</style>
