<template>
  <div class="login">
    <div class="login-box">
      <h2 class="login-title">登录</h2>
      <el-form :model="usermsg" :rules="rules" ref="usermsg" label-width="100px" >
        <el-form-item label="用户名" prop="phone">
          <el-input v-model="usermsg.phone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passwd">
          <el-input v-model="usermsg.passwd" type="passwd"></el-input>
        </el-form-item>
         <el-form-item label-width="220px">
           <el-button @click="resetForm()">重置</el-button>
          <el-button type="primary" @click="login()" >登录</el-button>
        </el-form-item>
        <footer>@copyright xxxxxxxxxxxxxx</footer>
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
        phone: '13594347817',
        passwd: '123456',
        key: '00d91e8e0cca2b76f515926a36db68f5'
      },
      rules: {
        phone: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 12, message: '长度在 1 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
  },
  methods: {
    resetForm () {
      this.$refs['usermsg'].resetFields()
    },
    login () {
      this.$refs['usermsg'].validate(valid => {
        if (valid) {
          this.$http.post('login', this.usermsg).then(res => {
            console.log(res)
          })
        }
      })
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
footer{
  color:#ccc;
  padding-bottom: 10px;
}
</style>
