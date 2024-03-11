<script>
import * as echarts from 'echarts';

import axios from "axios";
import dayjs from "dayjs";


export default {
  name: "Gold",
  data() {
    return {
      ccbListShow: false,
      ccbList: [],
    }
  },
  mounted() {
    this.ccbListShow = true
    this.ccbList = goldData
    setTimeout(() => {
      const chartDom = document.getElementById('ccbListShow');
      const myChart = echarts.init(chartDom);
      const option = {
        title: {
          text: '每日黄金'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['开盘', '最高', '最低', '收盘', '涨幅', '五天平均值', '十天平均值']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.ccbList.map(item => item.time)
        },
        yAxis: {
          type: 'value',
          min: 300
        },
        series: [
          {
            name: '开盘',
            type: 'line',
            smooth: true,
            data: this.ccbList.map(item => item.open)
          },
          {
            name: '最高',
            type: 'line',
            smooth: true,
            data: this.ccbList.map(item => item.high)
          },
          {
            name: '最低',
            type: 'line',
            smooth: true,
            data: this.ccbList.map(item => item.low)
          },
          {
            name: '收盘',
            type: 'line',
            smooth: true,
            data: this.ccbList.map(item => item.close)
          },
          {
            name: '涨幅',
            type: 'line',
            smooth: true,
            data: this.ccbList.map(item => item.valueS)
          },
          {
            name: '五天平均值',
            type: 'line',
            smooth: true,
            data: this.ccbList.map(item => item.FIVEDAYAVG)
          },
          {
            name: '十天平均值',
            type: 'line',
            smooth: true,
            data: this.ccbList.map(item => item.TENDAYAVG)
          },
        ]
      };

      option && myChart.setOption(option);


      let zf = document.getElementById('ccbListZFShow');
      const zfMyChart = echarts.init(zf);
      const optionZf = {
        title: {
          text: '每日黄金涨幅'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['涨幅']
        },

        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.ccbList.map(item => item.time)
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '涨幅',
            type: 'line',
            smooth: true,
            data: this.ccbList.map(item => item.valueS)
          },

        ]
      };

      optionZf && zfMyChart.setOption(optionZf);
    }, 1000)
  }
}
</script>

<template>
  <div v-if="ccbListShow">
    <div>
      <span style="margin-right: 10px"><a href="http://www3.ccb.com/chn/home/gold_new/hqzs/index.shtml" target="_blank">黄金积存报价</a></span>
      <span style="margin-right: 10px">时间：{{ ccbList[ccbList.length - 1].time }}</span>
      <span style="margin-right: 10px">开盘：{{ ccbList[ccbList.length - 1].open }}</span>
      <span style="margin-right: 10px">收盘：{{ ccbList[ccbList.length - 1].close }}</span>
      <span style="margin-right: 10px">涨幅：{{ ccbList[ccbList.length - 1].valueS }}%</span>
    </div>
    <a-row>
      <a-col :xs="{ span: 24}" :md="{span:24}" :lg="{span:12}" :xl="{span:12}" :xxl="{ span: 12 }">
        <div id="ccbListShow"></div>
      </a-col>
      <a-col :xs="{ span: 24 }" :md="{span:24}" :lg="{span:12}" :xl="{span:12}" :xxl="{ span: 12 }">
        <div id="ccbListZFShow"></div>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
#ccbListShow {
  width: 100%;
  height: 500px;
}

#ccbListZFShow {
  width: 100%;
  height: 500px;
}
</style>
