<!--
 * @Description: SideBar.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 17:12:36
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-27 16:05:35
 -->
<template>
  <div id="sideBar_wrap">
    <Logo :collapse="sidebar"/>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#fff"
      background-color="#20222A"
      :unique-opened="false"
      :collapse="sidebar"
      mode="vertical"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import Logo from "./logo";
import { mapGetters } from "vuex";
export default {
  components: {
    Logo
  },
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
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="less">
.el-menu {
  border-right: none;
}
#sideBar_wrap {
  height: 100vh;
  background-color: #20222a;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 400px;
}
</style>
