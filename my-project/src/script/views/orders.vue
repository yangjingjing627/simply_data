<template>
  <div id="orders" class="right-side">
    最近订单
    <div class="recent-order">
      <div class="recent-title">{ title }</div>
      <div class="order-q-left">
        <div id="order-q"></div>
        <div class="order-q-sum">
            <ul class="top-goods-list">
                <li each="{ salesCount }">
                    <span class="count-data">{ name }</span>
                    <span class="count">{ data }</span>
                  </li>
            </ul>
        </div>
      </div>
      <div class="order-q-right">
        <div id="order-p"></div>
        <div class="order-q-sum">
          <ul class="top-goods-list">
              <li each="{ salesAmount }">
                  <span class="count-data">{ name }</span>
                  <span class="count">{ data }</span>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'province',
  data () {
    return {

    }
  }
}
</script>
<style>
</style>
