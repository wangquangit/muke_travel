<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arro-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  }
}
</script>

// scoped: 只对当前组件样式有效
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align : center
        font-size : 20px
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      float: right
      text-align: center
      color: #fff
      .arro-icon
        font-size : .24rem
        margin-left : -.04rem
    .header-input
      flex : 1
      height : .64rem
      background : #ffffff
      border-radius : .1rem
      margin-top : .12rem
      margin-left : .2rem
      line-height : .64rem
      color : #ccc
      padding-left : .2rem
</style>
