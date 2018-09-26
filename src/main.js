// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'babel-polyfill' // 解决低版本手机浏览器打开白屏BUG
import 'swiper/dist/css/swiper.css'

// npm install fastclick --save
// 解决客户端不同浏览器的问题
import 'styles/reset.css'

// iconfont:图标图片
import 'styles/iconfont.css'

// 1像素解决方案
import 'styles/border.css'

// 解决click延迟300毫秒
fastClick.attach(document.body)

// 轮播相关
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
