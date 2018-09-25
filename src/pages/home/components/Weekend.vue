<template>
    <div>
      <div class="commend-title">周末去哪儿</div>
      <ul>
        <li class="item border-bottom" v-for="item of commentList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl" alt="">
            </div>
            <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      commentList: [
        {id: 1, title: '锦绣中华民俗村', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg', desc: '深圳锦绣中华亦称"深圳小人国"，是深圳华侨城的一个旅游区，坐落在深圳湾畔。82个景点均按中国版图位置分布，比例大部分按1：15建造。这些景点可以分为三大类：古建筑类、山水名胜类、民居民俗类。安置在各景点上的陶艺小人达五万多人，生动再现我国的历史文化及民俗风情。这里的景点有名列世界八大奇迹的万里长城、秦陵兵马俑：（故宫）、佛像（乐山大佛）等等。“一步迈进历史，一天游遍中华”是该景点的口号，被国家旅游局誉为开主题公园先河之作。游客可在一天之内领略中华5000年历史风云，畅游大江南北锦绣河山。', price: 998},
        {id: 2, title: '世界之窗', imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg', desc: '以开放的艺术视野与国际化的创新方式，将中国传统文化精华中的舞蹈、戏曲、武术、杂技等多种艺术表现形式有机的溶为一体，多侧面全方位展现中国文化艺术在世界历史进程中的独特魅力.', price: 998},
        {id: 3, title: '锦绣中华民俗村', imgUrl: 'http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg', desc: '深圳锦绣中华亦称"深圳小人国"，是深圳华侨城的一个旅游区，坐落在深圳湾畔。82个景点均按中国版图位置分布，比例大部分按1：15建造。这些景点可以分为三大类：古建筑类、山水名胜类、民居民俗类。安置在各景点上的陶艺小人达五万多人，生动再现我国的历史文化及民俗风情。这里的景点有名列世界八大奇迹的万里长城、秦陵兵马俑：（故宫）、佛像（乐山大佛）等等。“一步迈进历史，一天游遍中华”是该景点的口号，被国家旅游局誉为开主题公园先河之作。游客可在一天之内领略中华5000年历史风云，畅游大江南北锦绣河山。', price: 998},
        {id: 4, title: '世界之窗', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg', desc: '以开放的艺术视野与国际化的创新方式，将中国传统文化精华中的舞蹈、戏曲、武术、杂技等多种艺术表现形式有机的溶为一体，多侧面全方位展现中国文化艺术在世界历史进程中的独特魅力.', price: 998},
        {id: 5, title: '锦绣中华民俗村', imgUrl: 'http://img1.qunarzz.com/sight/source/1505/69/e899202f7abddf.jpg_r_640x214_81b6b528.jpg', desc: '深圳锦绣中华亦称"深圳小人国"，是深圳华侨城的一个旅游区，坐落在深圳湾畔。82个景点均按中国版图位置分布，比例大部分按1：15建造。这些景点可以分为三大类：古建筑类、山水名胜类、民居民俗类。安置在各景点上的陶艺小人达五万多人，生动再现我国的历史文化及民俗风情。这里的景点有名列世界八大奇迹的万里长城、秦陵兵马俑：（故宫）、佛像（乐山大佛）等等。“一步迈进历史，一天游遍中华”是该景点的口号，被国家旅游局誉为开主题公园先河之作。游客可在一天之内领略中华5000年历史风云，畅游大江南北锦绣河山。', price: 998}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    .commend-title
        line-height : .8rem
        text-indent : .2rem
        background : #eee
    .item-img-wrapper
        overflow : hidden
        height : 0
        padding-bottom : 33.9%
        .item-img
            width : 100%
    .item-info
        padding : .1rem
        .item-title
            line-height : .54rem
            font-size : .38rem
            ellipsis()
        .item-desc
            line-height : .4rem
            color :#ccc
            ellipsis()
</style>
