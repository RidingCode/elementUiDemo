<template>
  <div class="topHead">
    <div class="topMain">
      <nav-list></nav-list>
      <user-info></user-info>
    </div>
  </div>
</template>

<script>
import NavList from '@/components/NavList'
import UserInfo from '@/components/UserInfo'
export default {
  name: 'TopHead',
  components: {
    NavList,
    UserInfo
  }
}
</script>

<style lang="stylus" scoped>
  .topHead
    width 100%
    height 80px
    background-color rgba(9,7,36,1)
    .topMain
      width 1201px
      margin 0 auto
      display flex
      .navList
        flex 7
      .userInfo
        flex 3
</style>
