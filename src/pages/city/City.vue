<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="allcities" :hot="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="allcities" @change="handleLetterChange"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      allcities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      // 发出axios请求获取数据
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    // 获取axios请求的数据并赋值
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.allcities = data.cities
        this.hotCities = data.hotCities
      }
    },
    // 接收子组件传来的click事件,获取A-Z
    handleLetterChange (letter) {
      this.letter = letter
      // console.log('shoudao', letter)
    }
  },
  mounted () {
    // 生命周期钩子函数,当组件完成加载后,触发函数获取城市信息
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
