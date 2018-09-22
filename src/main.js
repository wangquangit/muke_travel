// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// npm install fastclick --save
import fastClick from 'fastclick'
import 'styles/reset.css'
// 解决客户端不同浏览器的问题

// iconfont
import 'styles/iconfont.css'

import 'styles/border.css'
// 1像素解决方案

// 解决click延迟300毫秒
Vue.config.productionTip = false
fastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
