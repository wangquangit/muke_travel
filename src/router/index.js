import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/city', name: 'City', component: City},
    {path: '/detail/:id', name: 'Detail', component: Detail}
  ],
  // 解决每次进入新页面后可能不是在页面顶端的问题
  // 定义每次切换页面时的初始位置
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
