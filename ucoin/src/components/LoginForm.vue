<template>
  <div class="loginForm container">
    <div class="row typeRow">
      <div class="typeBtn">
        <span class="mail active">邮箱</span>&nbsp;|
        <span class="phone">手机号</span>
      </div>
    </div>
    <div class="row countRow">
      <label for="">邮箱</label>
      <input type="text" />
      <div class="msgRow">该邮箱无效，请先注册</div>
    </div>
    <div class="row pswRow">
      <label for="">密码</label>
      <input type="password" />
    </div>
    <div class="row formFoot">
      <div class="typeBtn">
        <span class="freePwd">免密登录/注册</span>
        <span class="forgotPwd">找回密码</span>
      </div>
    </div>
    <div class="row btnRow">
      <button>登录</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus">
.loginForm
  padding 30px 0
  .row
    font-size 0px
    label
      display inline-block
      width 29%
      color #333333
      font-size 14px
      text-align center
    input
      display inline-block
      width:400px;
      height:46px;
      background:rgba(255,255,255,1);
      border:1px solid rgba(228,231,238,1);
      opacity:1;
      border-radius:3px;
      margin-top 11px
      width 70%
    .msgRow
      font-size 12px
      color #E51C22
      padding-left 29%
      margin 5px 0
  width 450px
  // border 1px solid red
  height 240px
  .typeRow,.formFoot
    text-align right
    font-size 14px
    margin-top 10px
    .active
      color #3A82FC
    .typeBtn
      .freePwd,.forgotPwd
        color #3A82FC
  .btnRow
    text-align center
    button
      width:274px;
      height:46px;
      background:rgba(58,130,252,1);
      opacity:1;
      border-radius:800px;
      outline none
      color #fff
      margin-top 60px
      border none
</style>
