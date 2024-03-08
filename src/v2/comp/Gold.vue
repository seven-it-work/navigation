<script>
import * as echarts from 'echarts';

import axios from "axios";
import dayjs from "dayjs";



export default {
  name: "Gold",
  data(){
    return {
      jisuapiGold:[],
      ccbListShow:false,
      ccbList:[],
    }
  },
  mounted() {

    // 接口1 http://gold.cnfol.com/fol_inc/v6.0/Gold/goldhq/json/g/autd/KlDayS.json?t=0.11493099542321916
    // 接口2 https://api.jisuapi.com/gold/shgold?appkey=361c76d92622c7b7  限制一天100次
    // 接口3 http://www3.ccb.com/cn/home/news/trendchart/day/999933.js
    axios.get("http://www3.ccb.com/cn/home/news/trendchart/day/999933.js").then(res3=>{
      this.ccbListShow=true
      this.ccbList=res3.data
      setTimeout(()=>{
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
            min:300
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
            data: [ '涨幅']
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
      },1000)
    }).catch(error=>{
      console.log("请求失败,准备下个接口",error)
      let jisuapiGold = $cookies.get('jisuapiGold')
      if (!jisuapiGold) {
        axios.get("https://api.jisuapi.com/gold/shgold?appkey=361c76d92622c7b7").then(res => {
          if (res.status === 0) {
            $cookies.set('jisuapiGold', res.result)
          } else {
            console.log("请求失败")
          }
        }).catch(error => {
          console.log("请求失败")
        })
      }
    })
  }
}
</script>

<template>
  <div v-if="jisuapiGold && jisuapiGold.length>0">
    <div v-for="item in jisuapiGold" :key="item.typename">
      <span style="margin-right: 10px">{{item.typename}}</span>
      <span style="margin-right: 10px">{{item.midprice}}</span>
      <span style="margin-right: 10px">{{item.buyprice}}</span>
      <span style="margin-right: 10px">{{item.sellprice}}</span>
      <span style="margin-right: 10px">{{item.maxprice}}</span>
      <span style="margin-right: 10px">{{item.minprice}}</span>
    </div>
  </div>
  <div v-if="ccbListShow">
    <div>
      <span style="margin-right: 10px">开盘：{{ccbList[ccbList.length-1].open}}</span>
      <span style="margin-right: 10px">收盘：{{ccbList[ccbList.length-1].close}}</span>
      <span style="margin-right: 10px">涨幅：{{ccbList[ccbList.length-1].valueS}}%</span>
    </div>
    <a-row>
      <a-col :span="12">
        <div id="ccbListShow"></div>
      </a-col>
      <a-col :span="12">
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
