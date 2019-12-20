<template>
  <div class="userInfo">
    <router-link v-for="item in userinfo" :key="item.index" :to="item.url">{{item.name}}</router-link>
    <div class="language">语言</div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      userinfo: [
        { index: 0, name: '登录', url: '/login' },
        { index: 1, name: '注册', url: '/register' }
      ]
    }
  }
}
</script>

<style lang="stylus">
.userInfo {
  color: #fff;
  text-align: center;
  display: flex;
  height: 80px;
  line-height: 80px;
  font-size: 14px;
}
</style>
