<template>
    <div>
      <div class="commend-title">本周热销榜单</div>
      <ul>
          <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
            <img class="item-img" :src="item.imgUrl" alt="">
            <div class="item-info">
              <p class="item-title">{{item.title}}</p>
              <p class="item-desc">{{item.desc}}</p>
              <span class="item-price">¥{{item.price}}</span>
            </div>
          </router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl';
  .commend-title
    margin-top : .2rem
    line-height : .8rem
    text-indent : .2rem
    background : #eee
  .item
    display : flex
    height : 1.9rem
    overflow : hidden
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem
    .item-info
      flex : 1
      padding : .1rem
      min-width : 0
      .item-title
        margin-top : .05rem
        line-height : .54rem
        font-size : .38rem
        ellipsis()
      .item-desc
        line-height : .4rem
        font-size : .30rem
        padding-top : .1rem
        color :#ccc
        padding-bottom : .2rem
        ellipsis()
      .item-price
        color : #ff9300
        padding : 0 .3rem
        background : #cfd
        border-radius : .1rem
</style>
