import {createApp} from 'vue'
import App from './App.vue'
import ant from 'ant-design-vue'
import router from "./v2/router/index.js";

import VueCookies from 'vue-cookies'

const app=createApp(App)

app.use(ant).use(router).mount('#app')
app.config.globalProperties.$cookies = VueCookies
