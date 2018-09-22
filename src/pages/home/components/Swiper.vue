<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt=""/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 轮播页码
        loop: true
        // 无限轮播
      },
      swiperList: [{
        id: 1,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/28/869966be5963e102.jpg_750x200_f23248ba.jpg'
      }, {
        id: 2,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/e8/14b75b1c81fbe702.jpg_750x200_e6d4f1f1.jpg'
      }, {
        id: 3,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1808/3e/f1975f6bde70b202.jpg_750x200_c28601f0.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background : #fff
    // 页码变白色
.wrapper
    overflow : hidden
    width : 100%
    height : 0
    padding-bottom : 31.25%
    .swiper-img
        background : #ddd
        width : 100%

</style>
