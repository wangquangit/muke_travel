<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        // 初始化透明度
        opacity: 0
      }
    }
  },
  // keep-alive组件激活时生命周期钩子函数
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // keep-alive组件跳转时生命周期钩子函数(页面跳转时执行)
  deactivated () {
    // 页面跳转后对scroll事件进行解绑
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      // 获取下拉距离
      const top = document.documentElement.scrollTop
      if (top > 60) {
        // 下拉距离大于60显示header栏
        let opacity = top / 160
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        // 否则只显示返回图标
        this.showAbs = true
      }
    //   console.log()
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header-abs
        position : absolute
        left : .2rem
        top : .2rem
        width : .8rem
        height : $headerHeight
        border-radius : .4rem
        background : rgba(0, 0, 0, .6)
        text-align : center
        line-height : $headerHeight
        .header-abs-back
            color : #fff
            font-size : .4rem
    .header-fixed
        position : fixed
        top : 0
        left : 0
        right : 0
        height : $headerHeight
        line-height : $headerHeight
        text-align : center
        color : #fff
        background : $bgColor
        font-size : .32rem
        .header-fixed-back
            position : absolute
            top : 0
            left : 0
            width : .64rem
            text-align : chenter
            font-size : .4rem
            color : #fff
</style>
