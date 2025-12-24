import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import './style/element/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'video.js/dist/video-js.css'
import "./css/tailwindcss.css"


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(fab)
library.add(far)
library.add(fas)

import myTag from '@/components/myTag.vue'
import myHeader from '@/components/my-header.vue'

import myDialog from '@/components/myDialog.vue'
import screenCard from '@/components/screenCard.vue'
import chartItem from '@/components/chart-item.vue'

import DataVVue3 from '@kjgl77/datav-vue3'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('my-tag', myTag)
app.component('my-header', myHeader)
app.component('MyDialog', myDialog)
app.component('screen-card', screenCard)
app.component('chart-item', chartItem)

import * as echarts from 'echarts';
import mytheme from './utils/theme';
echarts.registerTheme('mytheme', mytheme);

import VChart from "vue-echarts";
app.component("v-chart", VChart);

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(DataVVue3)


app.mount('#app')
