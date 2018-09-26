<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_600x330_18d5b736.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          锦绣中华民俗村(AAAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe67f; </span>39
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGalary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGalary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1601/c3/c3fcab44b94e5a9e90.water.jpg_r_800x800_94db2bc5.jpg', 'http://img1.qunarzz.com/sight/p0/1412/91/290d76f0981a4000de6cdc867d9bfd2c.water.jpg_r_800x800_fa4cdee6.jpg']
    }
  },
  components: {
    CommonGallary
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
