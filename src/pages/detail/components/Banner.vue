<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe67f; </span>{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <!-- 新增详情页到大图渐隐渐现效果 -->
      <common-gallary :imgs="gallaryImgs" v-show="showGalary" @close="handleGallaryClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    // 接收父组件传来的数据
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGalary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      // 发生该事件,打开大图“Gallary”
      this.showGalary = true
    },
    handleGallaryClose () {
      // 发生该事件,关闭大图“Gallary”
      this.showGalary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position : relative
    overflow : hidden
    height : 0
    padding-bottom  : 55%
    .banner-img
      width : 100%
    .banner-info
      display : flex
      position : absolute
      left : 0
      right : 0
      bottom : 0
      line-height : .6rem
      color : #fff
      background-image : linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex : 1
        font-size : .32rem
        padding-left : .2rem
      .banner-number
        padding : 0 .4rem
        height : .32rem
        margin-top : .1rem
        line-height : .32rem
        border-radius : .2rem
        background : rgba(0, 0, 0, .5)
        font-size : .3rem
        .banner-icon
          font-size : .24rem
</style>
