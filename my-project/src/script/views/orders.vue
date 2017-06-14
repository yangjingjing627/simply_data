<template>
  <div id="orders" class="right-side">
    <div class="recent">
      <div class="recent-title">{{ formName }}</div>
      <div class="order-q-left">
        <div id="order-q"></div>
        <div class="order-q-sum">
            <ul class="top-goods-list">
              <li v-for="value in orderAmount">
                  <span class="count-data">{{ value.name }}</span>
                  <span class="count-data">{{ value.data }}</span>
              </li>
            </ul>
        </div>
      </div>
      <div class="order-q-right">
        <div id="order-p"></div>
        <div class="order-q-sum">
          <ul class="top-goods-list">
            <li v-for="value in orderAmount">
                <span class="count-data">{{ value.name }}</span>
                <span class="count-data">{{ value.data }}</span>
                <span class="count-data">新增fff</span>
                <span class="count-data">新增--yang--分支</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
var echarts = require('echarts')
// import jquery from 'jquery'
import API from '../../store/api.js'
export default {
  name: 'orders',
  data () {
    return {
      orderCount: [],
      orderAmount: [],
      dataOne: {},
      dataTwo: {},
      formName: ''
    }
  },
  created () {
    // do something after creating vue instance
    this.billCount()
    this.billAmount()
  },
  mounted: function () {
  },
  methods: {
    billCount () {
      var self = this
      self.$http.get(API.orderCount, {params: {}}).then((res) => {
        self.dataOne = res.data.data
        self.title = self.dataOne.formName
        for (var i = 0; i < self.dataOne.titles.length; i++) {
          var str = {}
          str.name = self.dataOne.titles[i]
          str.data = self.dataOne.charts[0].data[i]
          self.orderCount.push(str)
        }
        this.circle(document.getElementById('order-q'), self.dataOne)
      })
    },
    billAmount () {
      var self = this
      self.$http.get(API.orderAmount, {params: {}}).then((res) => {
        self.dataTwo = res.data.data
        for (var i = 0; i < self.dataTwo.titles.length; i++) {
          var str2 = {}
          str2.name = self.dataTwo.titles[i]
          str2.data = self.dataTwo.charts[0].data[i]
          self.orderAmount.push(str2)
        }
        this.circle(document.getElementById('order-p'), self.dataTwo)
      })
    },
    circle (opt, data) {
      var self = this
      var myChart = echarts.init(opt)
      self.data = data
      self.formName = data.formName
      self.chartName = data.chartName
      var xdata = self.data.titles
      var seriesData = []
      var legendData = []
      for (var i = 0; i < self.data.charts.length; i++) {
        var seriesList = {}
        legendData.push(self.data.charts[i].name)
        seriesList.name = self.data.charts[i].name
        seriesList.type = self.data.charts[i].type
        seriesList.data = self.data.charts[i].data
        seriesData.push(seriesList)
      }
      var option = {
        title: {
          text: self.chartName,
          x: 'center',
          textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#333'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'  // 默认为直线，可选为：'line' | 'shadow'
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
        ],
        series: seriesData
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style>
</style>
