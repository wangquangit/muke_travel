<template>
    <div class="icons">
        <!-- 创建滑动区域 -->
        <swiper>
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class = "icon-imgcontent" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {id: 1, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '热门景点'},
        {id: 2, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png', desc: '水上乐园'},
        {id: 3, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', desc: '游乐场'},
        {id: 4, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png', desc: '海洋馆'},
        {id: 5, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png', desc: '动植物园'},
        {id: 6, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png', desc: '玩转长隆'},
        {id: 7, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png', desc: '城市观光'},
        {id: 8, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', desc: '一日游'},
        {id: 9, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png', desc: '东部华侨城'},
        {id: 10, imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png', desc: '全部玩乐'}
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icons >>> .swiper-container
        // 让区域内都可以滑动
        height : 0
        padding-bottom : 50%
        margin-top : .1rem
        .icon
            height : 0
            position : relative
            overflow : hidden
            width : 25%
            float : left
            padding-bottom : 25%
            .icon-desc
                position : absolute
                left : 0
                right : 0
                bottom : 0
                height : .44rem
                line-height : .44rem
                color : $darkTextColor
                text-align : center
                ellipsis()
            .icon-img
                position : absolute
                top : 0
                left : 0
                right : 0
                bottom : .44rem
                box-sizing : border-box
                padding : .1rem
                .icon-imgcontent
                    display : block
                    margin : 0 auto
                    height : 100%
</style>
