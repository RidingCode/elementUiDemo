<template>
  <div class="login">
    <div class="login-box">
      <h2 class="login-title">登录</h2>
      <el-form :model="usermsg" :rules="rules" ref="usermsg" label-width="100px" >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="usermsg.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="usermsg.password" type="password"></el-input>
        </el-form-item>
         <el-form-item label-width="220px">
           <el-button @click="resetForm()">重置</el-button>
          <el-button type="primary" >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  data () {
    return {
      usermsg: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
  },
  methods: {
    resetForm () {
      this.$refs['usermsg'].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  height:100%;
  width:100%;
  background-color: #8EC5FC;
  background-image: -webkit-linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  background-image: -moz-linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  background-image: -o-linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  .login-box{
    position: absolute;
    width:480px;
    height:auto;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
    .login-title{
      text-align: center;
      margin:30px auto;
    }
    .el-input{
      width:80%;
      margin-bottom: 30px;
    }
    .el-form-item__error{
      color:black;
    }
    .login-btns{
      position: absolute;
      bottom: 10%;
      right: 10%;
    }
  }
}

</style>
