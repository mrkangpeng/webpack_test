<!--
 * @Description: SideBar.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 17:12:36
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-10 15:50:43
 -->
<template>
  <div id="sideBar_wrap" :class=" sidebar ? 'side-bar-true' :'side-bar-false'">
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
    console.log(this.routes);
  },
  watch: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
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
.side-bar-true {
    width: 64px;
    transition: all .28s ease-out;
}
.side-bar-false {
    width: 200px;
    transition: all .28s ease-out;
}
</style>
