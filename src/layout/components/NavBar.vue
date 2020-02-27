<!--
 * @Description: NavBar.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 13:43:46
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-27 14:02:50
 -->
<template>
  <div id="navBar_wrap">
    <div class="icon" @click="changeSideBar">
      <i class="iconfont icon-caidan" :class="{'is-acitve':sidebar}"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {},
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters([
        'sidebar'
    ])
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    changeSideBar() {
      this.$store.dispatch('setSideBarState/changeSideBar');
    }
  }
};
</script>

<style scoped lang="less">
#navBar_wrap {
  width: 100%;
  height: 50px;
  background-color: #eee;
  display: flex;
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
