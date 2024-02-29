<script setup>
import Index from "./v2/index.vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import {ref} from "vue";
dayjs.locale('zh-cn');

const locale=ref(zhCN)

</script>

<template>
  <a-config-provider :locale="locale">
    <Index></Index>
  </a-config-provider>
</template>

