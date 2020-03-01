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
      :default-active="$route.path"
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
      <SideBarItem v-for="(route,index) in routes" :key="index" :item="route"></SideBarItem>
      <!-- <template v-for="(item,index) in routes">
        <el-menu-item
          v-if="!item.hidden && item.children === undefind"
          :key="index"
          :index="item.path"
        >
          <i v-if="item && item.meta" :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
        <el-submenu v-else :index="item.path" :key="index">
          <template slot="title">
            <i v-if="item && item.meta" :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <el-menu-item
            v-for="(child,childIndex) in item.children"
            :key="childIndex"
            :index="child.path"
          >
            <i v-if="child && child.meta" :class="child.meta.icon"></i>
            <span slot="title">{{child.meta.title}}</span>
          </el-menu-item>
        </el-submenu>
      </template> -->
    </el-menu>
  </div>
</template>

<script>
import Logo from "./logo";
import { mapGetters } from "vuex";
import SideBarItem from "./SideBarItem";
export default {
  components: {
    Logo,
    SideBarItem
  },
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
  mounted() {
    console.log(this.routes)
  },
  watch: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击菜单跳转指定页面
    handleToPage(path) {
      console.log(path);
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
