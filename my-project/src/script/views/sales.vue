<template>
  <div id="sales" class="right-side">
    <div class="recent">
      <div class="recent-title">近七天订单哪数量</div>
      <div class="order-q-left">
        <div id="sales-q"></div>
        <div class="order-q-sum">
          <ul class="top-goods-list">
            <li v-for="value in salesCount">
                <span class="count-data">{{ value.name }}</span>
                <span class="count-data">{{ value.data }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="order-q-right">
        <div id="sales-p"></div>
        <div class="order-q-sum">
        <ul class="top-goods-list">
          <li v-for="value in salesAmount">
              <span class="count-data">{{ value.name }}</span>
              <span class="count-data">{{ value.data }}</span>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var echarts = require('echarts')
import API from '../../store/api.js'
export default {
  name: 'sales',
  data () {
    return {
      todos: [
        { text: 'first lesson', age: '20岁' },
        { text: 'second lesson', age: '20岁' },
        { text: 'third lesson', age: '20岁' }
      ]
    }
  },
  mounted: function () {
    // var self = this
    this.billCount()
    this.billAmount()
    // this.circle(document.getElementById('sales-q'), self.billCount)
    // this.circle(document.getElementById('sales-p'), self.billAmount)
  },
  methods: {
    billCount () {
      var self = this
      self.$http.get(API.billCount, {params: {}}).then((res) => {
        self.dataOne = res.data.data
        console.log(JSON.stringify(res.data.data) + '-----p')
        self.title = self.dataOne.formName
        for (var i = 0; i < self.dataOne.titles.length; i++) {
          var str = {}
          str.name = self.dataOne.titles[i]
          str.data = self.dataOne.charts[0].data[i]
          self.salesCount.push(str)
        }
      })
    },
    billAmount () {
      var self = this
      self.$http.get(API.billAmount, {params: {}}).then((res) => {
        self.dataTwo = res.data.data
        for (var i = 0; i < self.dataTwo.titles.length; i++) {
          var str2 = {}
          str2.name = self.dataTwo.titles[i]
          str2.data = self.dataTwo.charts[0].data[i]
          self.salesAmount.push(str2)
        }
      })
    },
    circle (opt, data) {
      var self = this
      var myChart = echarts.init(opt)
      self.data = data
      self.formName = data.chartName
      var xdata = self.data.titles
      // var seriesData = []
      // var legendData = []
      console.log(self.data.charts)
      // for (var i = 0; i < self.data.charts.length; i++) {
      //   var seriesList = {}
      //   legendData.push(self.data.charts[i].name)
      //   seriesList.name = self.data.charts[i].name
      //   seriesList.type = self.data.charts[i].type
      //   seriesList.data = self.data.charts[i].data
      //   seriesData.push(seriesList)
      // }
      var option = {
        title: {
          // text: self.formName,
          x: 'center',
          textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          // left: '3%',
          // right: '4%',
          left: '0',
          right: '0',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: xdata
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ]
        // series: seriesData
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style>
</style>
