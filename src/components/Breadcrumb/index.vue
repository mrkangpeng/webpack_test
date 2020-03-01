<!--
 * @Description: breadcrumb
 * @Autor: kangpeng
 * @Date: 2020-02-28 10:52:11
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 11:04:13
 -->
<template>
  <el-breadcrumb class="breadcrumb_wrap" separator="/">
    <el-breadcrumb-item :to="item.path" v-for="item in breadList" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      breadList: null
    };
  },
  computed: {},
  created() {
    this.getBreadCrumb();
  },
  mounted() {},
  watch: {
    $route() {
      this.getBreadCrumb();
    }
  },
  methods: {
    getBreadCrumb() {
      let matched = this.$route.matched.filter(item => item && item.meta);
      const first = matched[0];
      if (!this.isHome(first)) {
        matched = [{ path: "/", meta: { title: "主页" } }].concat(matched);
      }
      this.breadList = matched.filter(item => item && item.meta);
    },
    isHome(route) {
      if (route.name == "home") {
        return true;
      } else {
        return false;
      }
    },
    // handleSkip(item){
    //   const {redirect,path} = item
    //   if (redirect) {
    //     this.$router.push(redirect)
    //     return false
    //   }
    //   this.$router.push(this.pathCompile(path))
    // },
    // pathCompile(path) {
    //   const { params } = this.$route
    //   var toPath = pathToRegexp.compile(path)
    //   return toPath(params)
    // },
  }
};
</script>

<style scoped lang="less">
.breadcrumb_wrap {
  width: 100%;
  height: 30px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #ccc;
}
</style>
