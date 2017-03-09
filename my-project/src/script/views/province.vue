<template>
  <div id="province" class="right-side">
    省市区各地数据查询列表
    <div id="provinceChart">

    </div>
  </div>
</template>
<script>
var echarts = require('echarts')
import API from '../../store/api.js'
export default {
  name: 'province',
  data () {
    return {
      chart: 'charts图'
    }
  },
  mounted: function () {
    this.circle(document.getElementById('provinceChart'))
    this.getProvince()
  },
  methods: {
    getProvince () {
      var self = this
      self.$http.get(API.province, {params: {}}).then((res) => {
      })
    },
    circle (opt) {
      var myChart = echarts.init(opt)
      // 绘制图表
      var option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style>
</style>
