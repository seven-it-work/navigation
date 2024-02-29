<script setup>
import './style.scss'

import Header from "./Header.vue";
</script>

<template>
<!--  https://assets.codepen.io/3364143/7btrrd.mp4" -->
  <div class="video-bg1">
    <video autoplay loop muted>
      <source src="http://www.xfubk.com/api.php" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div class="video-bg2">
    <video  autoplay loop muted>
      <source src="http://www.xfubk.com/api.php" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <div style="opacity:0.8;">
    <Header style="border-radius: 8px;"></Header>
    <router-view/>
  </div>
</template>

<style scoped>

</style>