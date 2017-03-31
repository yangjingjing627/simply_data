<template>
  <div id="province" class="right-side">
    <div id="provinceChart">

    </div>
    <div class="recent-title">{{ formName }}</div>
    <div class="order-q-sum province">
      <ul class="top-goods-list prov">
        <li v-for="item in provinceData">
            <span>{{ item.name }}</span>
        </li>
      </ul>
      <ul class="top-goods-list prov">
        <li v-for="item in provinceData">
            <span>{{ item.data }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
var echarts = require('echarts')
// import jquery from 'jquery'
import API from '../../store/api.js'
export default {
  name: 'province',
  data () {
    return {
      province: {},
      arr: [],
      provinceData: [],
      formName: ''
    }
  },
  created () {
    // do something after creating vue instance
    this.provinceChart()
  },
  mounted: function () {
  },
  methods: {
    provinceChart () {
      var self = this
      self.$http.get(API.province, {params: {}}).then((res) => {
        self.province = res.data.data
        for (var i = 0; i < self.province.titles.length; i++) {
          var str2 = {}
          str2.name = self.province.titles[i]
          self.provinceData.push(str2)
        }
        for (var m = 0; m < self.province.charts.length; i++) {
          var str4 = {}
          for (var j = 0; j < self.province.charts[m].length; j++) {
            var str3 = {}
            var arr = []
            str3.data = self.province.charts[m].data[j]
            arr.push(str3)
          }
          self.provinceData.push(str4)
        }
        console.log(JSON.stringify(self.provinceData) + '----self.provinceData----')
        this.circle(document.getElementById('provinceChart'), self.province)
      })
    },
    circle (opt, data) {
      var self = this
      var myChart = echarts.init(opt)
      self.data = data
      self.formName = data.formName
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
          // text: self.formName,
          x: 'center',
          textStyle: {
            fontSize: 12,
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
