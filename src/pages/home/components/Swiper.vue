<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSweper">
            <swiper-slide v-for="item of list" :key="item.id">
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
      }
    }
  },
  computed: {
    showSweper () {
      return this.list.length
    }
  },
  props: {
    list: Array
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
    padding-bottom : 30%
    .swiper-img
        width : 100%
</style>
