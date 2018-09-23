<template>
    <div>
      <div class="commend-title">本周热销榜单</div>
      <ul>
        <li class="item border-bottom" v-for="item of commentList" :key="item.id">
           <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <span class="item-price">¥{{item.price}}</span>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      commentList: [
        {id: 1, title: '锦绣中华民俗村', imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg', desc: '深圳锦绣中华亦称"深圳小人国"，是深圳华侨城的一个旅游区，坐落在深圳湾畔。82个景点均按中国版图位置分布，比例大部分按1：15建造。这些景点可以分为三大类：古建筑类、山水名胜类、民居民俗类。安置在各景点上的陶艺小人达五万多人，生动再现我国的历史文化及民俗风情。这里的景点有名列世界八大奇迹的万里长城、秦陵兵马俑：（故宫）、佛像（乐山大佛）等等。“一步迈进历史，一天游遍中华”是该景点的口号，被国家旅游局誉为开主题公园先河之作。游客可在一天之内领略中华5000年历史风云，畅游大江南北锦绣河山。', price: 998},
        {id: 2, title: '世界之窗', imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/87/8796d4dfe0366858a3.water.png_200x200_ca6e25bf.png', desc: '以开放的艺术视野与国际化的创新方式，将中国传统文化精华中的舞蹈、戏曲、武术、杂技等多种艺术表现形式有机的溶为一体，多侧面全方位展现中国文化艺术在世界历史进程中的独特魅力.', price: 998},
        {id: 3, title: '锦绣中华民俗村', imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg', desc: '深圳锦绣中华亦称"深圳小人国"，是深圳华侨城的一个旅游区，坐落在深圳湾畔。82个景点均按中国版图位置分布，比例大部分按1：15建造。这些景点可以分为三大类：古建筑类、山水名胜类、民居民俗类。安置在各景点上的陶艺小人达五万多人，生动再现我国的历史文化及民俗风情。这里的景点有名列世界八大奇迹的万里长城、秦陵兵马俑：（故宫）、佛像（乐山大佛）等等。“一步迈进历史，一天游遍中华”是该景点的口号，被国家旅游局誉为开主题公园先河之作。游客可在一天之内领略中华5000年历史风云，畅游大江南北锦绣河山。', price: 998},
        {id: 4, title: '世界之窗', imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/87/8796d4dfe0366858a3.water.png_200x200_ca6e25bf.png', desc: '以开放的艺术视野与国际化的创新方式，将中国传统文化精华中的舞蹈、戏曲、武术、杂技等多种艺术表现形式有机的溶为一体，多侧面全方位展现中国文化艺术在世界历史进程中的独特魅力.', price: 998},
        {id: 5, title: '锦绣中华民俗村', imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg', desc: '深圳锦绣中华亦称"深圳小人国"，是深圳华侨城的一个旅游区，坐落在深圳湾畔。82个景点均按中国版图位置分布，比例大部分按1：15建造。这些景点可以分为三大类：古建筑类、山水名胜类、民居民俗类。安置在各景点上的陶艺小人达五万多人，生动再现我国的历史文化及民俗风情。这里的景点有名列世界八大奇迹的万里长城、秦陵兵马俑：（故宫）、佛像（乐山大佛）等等。“一步迈进历史，一天游遍中华”是该景点的口号，被国家旅游局誉为开主题公园先河之作。游客可在一天之内领略中华5000年历史风云，畅游大江南北锦绣河山。', price: 998},
        {id: 6, title: '世界之窗', imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/87/8796d4dfe0366858a3.water.png_200x200_ca6e25bf.png', desc: '以开放的艺术视野与国际化的创新方式，将中国传统文化精华中的舞蹈、戏曲、武术、杂技等多种艺术表现形式有机的溶为一体，多侧面全方位展现中国文化艺术在世界历史进程中的独特魅力.', price: 998},
        {id: 7, title: '锦绣中华民俗村', imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/9d/9d8c0e9a01bba92e90.water.jpg_200x200_86f2e623.jpg', desc: '深圳锦绣中华亦称"深圳小人国"，是深圳华侨城的一个旅游区，坐落在深圳湾畔。82个景点均按中国版图位置分布，比例大部分按1：15建造。这些景点可以分为三大类：古建筑类、山水名胜类、民居民俗类。安置在各景点上的陶艺小人达五万多人，生动再现我国的历史文化及民俗风情。这里的景点有名列世界八大奇迹的万里长城、秦陵兵马俑：（故宫）、佛像（乐山大佛）等等。“一步迈进历史，一天游遍中华”是该景点的口号，被国家旅游局誉为开主题公园先河之作。游客可在一天之内领略中华5000年历史风云，畅游大江南北锦绣河山。', price: 998},
        {id: 8, title: '世界之窗', imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/87/8796d4dfe0366858a3.water.png_200x200_ca6e25bf.png', desc: '以开放的艺术视野与国际化的创新方式，将中国传统文化精华中的舞蹈、戏曲、武术、杂技等多种艺术表现形式有机的溶为一体，多侧面全方位展现中国文化艺术在世界历史进程中的独特魅力.', price: 998}
      ]
    }
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
