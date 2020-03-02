<!--
 * @Description: 
 * @Autor: kangpeng
 * @Date: 2020-02-28 14:33:29
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-03-02 10:29:50
 -->
<template>
  <fragment class="sidebarItem" v-if="!item.hidden">
      <template v-if="item.children === undefined">
        <el-menu-item :index="item.path">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
          <!-- <Item :icon="item.meta.icon" :title="item.meta.title"></Item> -->
        </el-menu-item>
      </template>

      <el-submenu v-else :index="item.path" popper-append-to-body>
        <template slot="title">
          <i :class="item.meta.icon"></i>
          <span slot="title">{{item.meta.title}}</span>
          <!-- <Item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></Item> -->
        </template>
        <sidebarItem v-for="child in item.children" :key="child.path" :item="child" />
      </el-submenu>
  </fragment>
</template>

<script>
import Item from "./item";
export default {
  name: "sidebarItem",
  components: {
    Item
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
.el-menu-item {
  &.is-active {
    color: #fff !important;
    background: #00b38a !important;
    i {
      color: #fff !important;
    }
  }
}
</style>