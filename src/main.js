// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// npm install fastclick --save
import 'styles/reset.css'
// 解决客户端不同浏览器的问题

// iconfont
import 'styles/iconfont.css'

import 'styles/border.css'
// 1像素解决方案

// 解决click延迟300毫秒
Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
