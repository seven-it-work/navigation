<script setup>
import './style.scss'
import {SyncOutlined, StepBackwardOutlined, SwapOutlined} from '@ant-design/icons-vue';

import Header from "./Header.vue";
import {ref} from "vue";

const topicLit = ['随机视频', '固定视频', '无视频']
const topicIndex = ref(Number.parseInt($cookies.get("topicIndex")) || 0)
const changeTopic = () => {
  topicIndex.value = (topicIndex.value + 1) % 3
  $cookies.set("topicIndex", topicIndex.value)
}
const changeVideo = () => {
  document.getElementById("video").load()
}
</script>

<template>
  <!--  https://assets.codepen.io/3364143/7btrrd.mp4" -->
  <div class="video-bg1 video-animation" v-if="topicIndex===0">
    <video autoplay loop muted id="video">
      <source src="http://www.xfubk.com/api.php" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="video-bg2" v-else-if="topicIndex===1">
    <video autoplay loop muted>
      <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div v-else>
  </div>
  <a-float-button-group shape="square">
    <a-tooltip title="切换视频">
      <a-float-button @click="changeVideo">
        <template #icon>
          <SyncOutlined/>
        </template>
      </a-float-button>
    </a-tooltip>
    <a-tooltip title="切换主题">
      <a-float-button @click="changeTopic">
        <template #icon>
          <SwapOutlined/>
        </template>
      </a-float-button>
    </a-tooltip>

    <!--    <a-back-top :visibility-height="0" />-->
  </a-float-button-group>
  <div style="opacity:0.8;">
    <Header style="border-radius: 8px;"></Header>
    <router-view/>
  </div>
</template>

<style scoped>

</style>