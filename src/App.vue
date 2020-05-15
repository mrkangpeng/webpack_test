<!--
 * @Description: App.vue
 * @Autor: kangpeng
 * @Date: 2020-02-26 10:38:44
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-05-15 10:31:16
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>
<style>
ul,
li {
    padding: 0;
    margin: 0;
    list-style: none;
}
a,a:link,a:visited,a:hover,a:active{
    text-decoration: none;
    color:inherit;
}
</style>