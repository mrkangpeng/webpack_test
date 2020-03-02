<!--
 * @Description: App.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 10:38:44
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-02 17:09:18
 -->
<template>
  <div id="app">
    <router-view v-if="isReloadAlive" />
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    reload: this.reload;
  },
  data() {
    return {
      isReloadAlive: true
    };
  },
  methods: {
    reload() {
      this.isReloadAlive = false;
      this.$nextTick(() => {
        this.isReloadAlive = true;
      });
    }
  }
};
</script>