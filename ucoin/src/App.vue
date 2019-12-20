<template>
  <div id="app">
    <top-head></top-head>
    <router-view />
  </div>
</template>

<script>
import TopHead from '@/components/TopHead'
export default {
  name: 'App',
  components: {
    TopHead
  }
}
</script>

<style lang="stylus">
@import url('./assets/css/reset.css');
html,body
  width 100vw
  height 100%
  min-width 1201px
  background-color #F1F2F9
.container
  width 100%
  max-width 1201px
  margin 0 auto
  background-color #fff
</style>
