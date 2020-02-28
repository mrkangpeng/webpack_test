<!--
 * @Description: SideBar.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 17:12:36
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 16:49:58
 -->
<template>
  <div id="sideBar_wrap">
    <Logo :collapse="sidebar" />
    <el-menu
      default-active="1-4-1"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#fff"
      background-color="#20222A"
      :unique-opened="false"
      :collapse-transition="false"
      :collapse="sidebar"
      mode="vertical"
    >
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">主页</span>
        </template>
        <el-menu-item index="1-1">页面一</el-menu-item>
        <el-menu-item index="1-2">页面二</el-menu-item>
        <el-menu-item index="1-3">页面三</el-menu-item>
        <el-submenu index="1-4">
          <span slot="title">页面四</span>
          <el-menu-item index="1-4-1">页面4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">用户</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </template>
        <el-menu-item index="1-1">基本资料</el-menu-item>
        <el-menu-item index="1-2">修改密码</el-menu-item>
      </el-submenu>-->
      <template v-for="(item,index) in routes">
        <el-menu-item
          v-if="item.children === undefind"
          :key="index"
          :index="item.path"
          @click="handleToPage(item.path)"
        >
          <Item v-if="item && item.meta" :icon="item.meta.icon" :title="item.meta.title"></Item>
        </el-menu-item>
        <el-submenu v-else :index="item.path" :key="index">
          <template slot="title">
            <Item v-if="item && item.meta" :icon="item.meta.icon" :title="item.meta.title"></Item>
          </template>
          <el-menu-item
            v-for="(child,childIndex) in item.children"
            :key="childIndex"
            :index="child.path"
          >
            <Item v-if="item && item.meta" :icon="item.meta.icon" :title="item.meta.title"></Item>
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import Logo from "./logo";
import Item from "./item";
import { mapGetters } from "vuex";
import SideBarItem from "./SideBarItem";
export default {
  components: {
    Logo,
    Item,
    SideBarItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["sidebar"]),
    routes() {
      return this.$router.options.routes;
    }
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
    },
    // 点击菜单跳转指定页面
    handleToPage
  }
};
</script>

<style scoped lang="less">
.el-menu {
  border-right: none;
}
.el-menu-item {
  &.is-active {
    color: #fff !important;
    background: #00b38a !important;
    i {
      color: #fff !important;
    }
  }
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
