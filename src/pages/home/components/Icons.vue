<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p>景点门票</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png" alt="">
            </div>
            <p>水上乐园</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png" alt="">
            </div>
            <p>游乐场</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png" alt="">
            </div>
            <p>海洋馆</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p>动植物园</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png" alt="">
            </div>
            <p>玩转长隆</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png" alt="">
            </div>
            <p>城市观光</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class = "icon-imgcontent" src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png" alt="">
            </div>
            <p>一日游</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeIcons'
}
</script>

<style lang="stylus" scoped>
    .icons
        overflow : hidden
        height : 0
        padding-bottom : 50%
        background : red
        .icon
            position : relative
            overflow : hidden
            width : 25%
            float : left
            padding-bottom : 21.6%
            background : blue
            .icon-img
                position : absolute
                top : 10%
                left : 15%
                right : 0
                bottom : .44rem
                .icon-imgcontent
                    height : 100%
</style>
