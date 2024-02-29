<script setup>
import './style.scss'
import Header from "./v1/Header.vue";
import Sidebar from "./v1/Sidebar.vue"
import MainContainer from "./v1/MainContainer.vue"
</script>

<template>
  <!--背景视频-->
  <div class="video-bg">
    <video width="320" height="240" autoplay loop muted>
      <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
  <!--黑白模式切换-->
  <div class="dark-light">
    <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"
         stroke-linejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  </div>
  <Header></Header>
  <div class="wrapper">
    <Sidebar></Sidebar>
    <!--        主要核心页面-->
    <div class="main-container">
      <MainContainer></MainContainer>
    </div>
  </div>
</template>

