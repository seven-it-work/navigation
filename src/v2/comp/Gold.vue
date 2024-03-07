<script>


import * as echarts from 'echarts/core';
import {
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent
} from 'echarts/components';
import {LineChart} from 'echarts/charts';
import {UniversalTransition} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';
import axios from "axios";

echarts.use([
  DatasetComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  TransformComponent,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);
export default {
  name: "Gold",
  data(){
    return {
      jisuapiGold:[]
    }
  },
  mounted() {
    const j = [{
      "typename": "人民币账户黄金",
      "midprice": "499.72",
      "buyprice": "499.47",
      "sellprice": "499.97",
      "maxprice": "500.16",
      "minprice": "495.11",
      "updatetime": "2024-03-07 21:21:16"
    }, {
      "typename": "人民币账户白银",
      "midprice": "5.612",
      "buyprice": "5.602",
      "sellprice": "5.622",
      "maxprice": "5.625",
      "minprice": "5.556",
      "updatetime": "2024-03-07 21:21:16"
    }, {
      "typename": "人民币账户铂金",
      "midprice": "214.09",
      "buyprice": "212.53",
      "sellprice": "215.65",
      "maxprice": "214.16",
      "minprice": "209.30",
      "updatetime": "2024-03-07 21:21:16"
    }, {
      "typename": "人民币账户钯金",
      "midprice": "243.43",
      "buyprice": "239.47",
      "sellprice": "249.64",
      "maxprice": "246.70",
      "minprice": "236.76",
      "updatetime": "2024-03-07 21:21:16"
    }, {
      "typename": "美元账户黄金",
      "midprice": "2159.5550",
      "buyprice": "2157.9350",
      "sellprice": "2161.1750",
      "maxprice": "2161.5250",
      "minprice": "2139.4950",
      "updatetime": "2024-03-07 21:21:16"
    }, {
      "typename": "美元账户白银",
      "midprice": "24.2545",
      "buyprice": "24.1795",
      "sellprice": "24.3295",
      "maxprice": "24.3100",
      "minprice": "24.0085",
      "updatetime": "2024-03-07 21:21:16"
    }, {
      "typename": "美元账户铂金",
      "midprice": "925.2050",
      "buyprice": "917.6080",
      "sellprice": "932.8020",
      "maxprice": "925.5200",
      "minprice": "904.3800",
      "updatetime": "2024-03-07 21:21:16"
    }, {
      "typename": "美元账户钯金",
      "midprice": "1052.0000",
      "buyprice": "1030.1225",
      "sellprice": "1083.8775",
      "maxprice": "1066.0000",
      "minprice": "1023.0000",
      "updatetime": "2024-03-07 21:21:16"
    }]
    // 接口1 http://gold.cnfol.com/fol_inc/v6.0/Gold/goldhq/json/g/autd/KlDayS.json?t=0.11493099542321916
    // 接口2 https://api.jisuapi.com/gold/shgold?appkey=361c76d92622c7b7  限制一天100次
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
</template>

<style scoped>
#chart-container {
  width: 500px;
  height: 100%;
}
</style>