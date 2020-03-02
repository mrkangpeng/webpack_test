<!--
 * @Description: login
 * @Autor: kangpeng
 * @Date: 2020-02-26 14:33:05
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-02 13:47:44
 -->
<template>
  <div class="login_wrap">
    <div class="form_wrap">
      <h1 class="title">后台管理系统</h1>
      <el-form size="small" :model="userInfo">
        <el-form-item label="用户名 :">
          <el-input placeholder="请输入用户名" v-model="userInfo.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码 :">
          <el-input placeholder="请输入密码" type="password" v-model="userInfo.password"></el-input>
        </el-form-item>
        <el-form-item align="center">
          <el-button type="primary" @click="resetForm">重置</el-button>
          <el-button type="primary" @click="loginIn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      userInfo: {
        userName: "kangpeng",
        password: "123456"
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    resetForm() {
      this.userInfo = {};
    },
    loginIn() {
        this.$router.push('/')
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.login_wrap {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: 100% 100%;
  .form_wrap {
    width: 400px;
    height: 300px;
    box-sizing: border-box;
    padding: 10px 20px;
    background: #fff;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
      text-align: center;
    }
  }
}
</style>
