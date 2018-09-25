<template>
    <ul class="list">
        <li class="item" v-for="item of letters" :key="item" :ref="item" @touchstart="hanldeTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="handleLetterClick">{{item}}</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    // 用于判断侧边滑动长度
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      //   console.log(e.target.innerText)
    },
    hanldeTouchStart () {
      // 开始滑动时为true
      this.touchStatus = true
    },
    handleTouchMove (e) {
      // 计算滑动长度
      if (this.touchStatus) {
        const startY = this.$refs['A'][0].offsetTop
        const touchY = e.touches[0].clientY - 71
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letters.length) {
          this.$emit('change', this.letters[index])
        }
        // console.log(index)
      }
    },
    handleTouchEnd () {
      // 结束滑动时为false
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        display : flex
        flex-direction : column
        justify-content : center
        position : absolute
        right : 0
        top : 1.58rem
        bottom : 0
        width : .4rem
        .item
            text-align : center
            line-height : .4rem
            color : $bgColor
</style>
