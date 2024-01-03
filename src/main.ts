/*
 * @Description: 
 * @Author: G
 * @Date: 2021-10-12 17:01:42
 * @LastEditTime: 2021-10-12 18:10:51
 */
import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import {createPinia} from 'pinia' 

const app= createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
