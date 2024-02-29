import {createApp} from 'vue'
import App from './App.vue'
import ant from 'ant-design-vue'
import router from "./v2/router/index.js";

createApp(App).use(ant).use(router).mount('#app')
