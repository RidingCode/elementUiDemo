<template>
  <div class="navList">
    <div class="navs">
      <router-link v-for="item in navs" :key="item.index" :to="item.url" >{{item.name}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  data () {
    return {
      navs: [
        { index: 0, name: '首页', url: '/' },
        { index: 1, name: '交易', url: '/transaction' },
        { index: 2, name: '合约', url: '/contract' },
        { index: 3, name: '公告', url: '/announcement' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.navList {
  color: #fff;

  .navs {
    width: 40%;
    display: flex;
    margin: 0 auto;

    a {
      color: #fff;
      text-decoration: none;
      display: block;
      line-height: 80px;
      text-align: center;
      flex: 1;
    }
  }
}
</style>
