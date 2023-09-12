import './assets/styles/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n';
//@ts-ignore
import messages from './i18n'; 
import store from '@/store/store';
import Antd from 'ant-design-vue';
//@ts-ignore
import SwiperClass, { Pagination, Autoplay } from 'Swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'

const i18n = createI18n({
  legacy: false, 
  locale: 'az',
  messages,
});

const app = createApp(App)

SwiperClass.use([Pagination, Autoplay])

app.use(Antd);
app.use(router)
app.use(i18n);
app.use(store);
app.use(VueAwesomeSwiper)

app.mount('#app')
