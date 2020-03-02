<!--
 * @Description: NavBar.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 13:43:46
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-02 17:47:51
 -->
<template>
  <div id="navBar_wrap">
    <div class="nav-top">
      <div class="left">
        <div class="icon" @click="changeSideBar">
          <i class="iconfont icon-caidan" :class="{'is-acitve':sidebar}"></i>
        </div>
        <div class="refresh icon" @click="refreshPage" style="margin-left:15px;">
          <i class="el-icon-refresh" :class="{'is-rotate':isRotate}"></i>
        </div>
      </div>
      <div class="right">
        <div class="zoom icon" @click="toggleScreen" style="margin-right:15px">
          <i class="iconfont" :class="isFullScreen ? 'icon-fangda':'icon-suoxiao'"></i>
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
    </div>
    <Breadcrumb />
  </div>
</template>

<script>
import screenfull from "screenfull";
import Breadcrumb from "@/components/Breadcrumb/index";
import { mapGetters } from "vuex";
export default {
  props: {},
  inject: ["reload"],
  components: {
    Breadcrumb
  },
  data() {
    return {
      isFullScreen: false,
      isRotate: false
    };
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
    },
    toggleScreen() {
      this.isFullScreen = !this.isFullScreen;
      if (screenfull.enabled) {
        console.log("您的浏览器不支持全屏");
      }
      screenfull.toggle();
    },
    refreshPage() {
      this.isRotate = true;
      setTimeout(() => {
          this.isRotate = false
      },2000)
    }
    // throttle(func, delay = 2000) {
    //   let timer = null;
    //   return function() {
    //     if (timer) return;
    //     timer = setTimeout(() => {
    //       fn.apply(this, arguments);
    //       clearTimeout(timer);
    //       timer = null;
    //     }, delay);
    //   };
    // }
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
  .nav-top {
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
    .icon .is-rotate::before {
      display: inline-block;
      transform: rotate(720deg);
      transition: all 1s linear;
    }
    .left,.right{
        display: flex;
        justify-content: center;
    }
    .right .logo_info{
        display: flex;
        align-items: center;
    }
  }
}
</style>
