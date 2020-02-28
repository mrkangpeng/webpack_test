<!--
 * @Description: AppMain.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 13:43:18
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 13:47:37
 -->
<template>
  <section id="appMain_wrap">
    <Breadcrumb />
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb/index";
export default {
  components: {
    Breadcrumb
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    key() {
        return this.$route.path
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
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #b0b0b0;
}
</style>
