<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>
// 此模块用于创建页面页面切换时的渐隐渐现效果
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" scoped>
    .v-enter, .v-leave-to
        opacity : 0
    .v-enter-active, .v-leave-active
        transition : opacity .5s
</style>
