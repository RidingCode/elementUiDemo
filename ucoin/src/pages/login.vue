<template>
  <div class="login container">
    <header>
      <h3 class="header">登录</h3>
    </header>
    <main>
      <login-form></login-form>
    </main>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>

<style lang="stylus">
.login
  margin-top 30px
  header
    width:100%;
    height:71px;
    padding-left:1em;
    font-size:24px;
    font-family:PingFangSC-Semibold;
    line-height:71px;
    color:rgba(51,51,51,1);
    opacity:1;
    border-bottom:1px solid rgba(228,231,238,1);
  main
    height:543px;
</style>
