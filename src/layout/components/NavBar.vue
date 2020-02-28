<!--
 * @Description: NavBar.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 13:43:46
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 10:16:19
 -->
<template>
  <div id="navBar_wrap">
    <div class="icon" @click="changeSideBar">
      <i class="iconfont icon-caidan" :class="{'is-acitve':sidebar}"></i>
    </div>
    <div class="logo_info">
      <i class="el-icon-s-custom" style="margin-right:5px"></i>
      <el-dropdown>
        <span class="el-dropdown-link">
          kangpeng
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>基本资料</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    changeSideBar() {
      this.$store.dispatch("setSideBarState/changeSideBar");
    }
  }
};
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  color: #000;
}
.el-icon-arrow-down {
  font-size: 12px;
}
#navBar_wrap {
  width: 100%;
  height: 50px;
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 10px;
  .icon i {
    font-size: 25px;
    cursor: pointer;
  }
  .icon .is-acitve::before {
    display: inline-block;
    transform: rotate(180deg);
  }
}
</style>
