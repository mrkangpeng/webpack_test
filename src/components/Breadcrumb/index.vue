<!--
 * @Description: breadcrumb
 * @Autor: kangpeng
 * @Date: 2020-02-28 10:52:11
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 11:04:13
 -->
<template>
  <el-breadcrumb class="breadcrumb_wrap" separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
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
