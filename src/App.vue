<script setup>
import Index from "./v2/index.vue";
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import {ref} from "vue";
import Gold from "./v2/comp/Gold.vue";
dayjs.locale('zh-cn');

const locale=ref(zhCN)
const open=ref(true)

</script>

<template>
  <a-config-provider :locale="locale">
    <a-modal v-model:open="open" title="每日看板" @ok="()=>open=false"
             width="100%"
             height="100%"
             wrap-class-name="full-modal" >
      <Gold></Gold>
    </a-modal>
    <Index></Index>
  </a-config-provider>
</template>
<style type="lass">
.full-modal .ant-modal{
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
  }
.full-modal  .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  overflow-y: scroll;
  overflow-x: scroll;
  }
.full-modal  .ant-modal-body {
    flex: 1;
  }
</style>

