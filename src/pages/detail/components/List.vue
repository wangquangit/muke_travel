<template>
    <div>
        <div class="item" v-for="(item, index) of categoryList" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>{{item.title}}
            </div>
            <div v-if="item.children" class="item-children">
                <!-- 递归组件 -->
                <detail-list :categoryList="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>

<style lang="stylus" scoped>
    .item-title-icon
        position : relative
        left : .06rem
        top : .06rem
        display: inline-block
        width: .36rem
        height: .36rem
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
    .item-title
        font-size : .32rem // 字体大小
        line-height : .8rem // 行高
        padding : 0 .2rem // 上下外边距为0,左右外边距0.2rem
    .item-children
        padding: 0 .2rem
</style>
