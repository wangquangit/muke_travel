<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png" alt="">
            </div>
            <p class="icon-desc">水上乐园</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png" alt="">
            </div>
            <p class="icon-desc">游乐场</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png" alt="">
            </div>
            <p class="icon-desc">海洋馆</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p class="icon-desc">动植物园</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png" alt="">
            </div>
            <p class="icon-desc">玩转长隆</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png" alt="">
            </div>
            <p class="icon-desc">城市观光</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png" alt="">
            </div>
            <p class="icon-desc">一日游</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .icons
        overflow : hidden
        height : 0
        padding-bottom : 50%
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
