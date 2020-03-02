<!--
 * @Description: AppMain.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 13:43:18
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-02 15:30:28
 -->
<template>
  <section id="appMain_wrap">
    <transition name="fade-transform">
      <router-view class="app_mian_view" :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path;
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less">
#appMain_wrap {
  height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
.app_mian_view {
  transition: all 0.28s linear;
  transition-delay: 0.1s;
}
.fade-transform-enter,
.fade-transform-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.fade-transform-leave-active,
.fade-transform-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
