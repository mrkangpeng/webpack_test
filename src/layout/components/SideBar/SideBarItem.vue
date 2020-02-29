<!--
 * @Description: 
 * @Autor: kangpeng
 * @Date: 2020-02-28 14:33:29
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 14:33:29
 -->
<template>
  <div class="sidebarItem" v-if="!item.hidden">
    <template v-if="item.children === undefined">
      <el-menu-item :index="item.path">
        <i :class="item.meta.icon"></i>
        <span v-if="!sidebar"  style="margin-left:10px" slot="title">{{item.meta.title}}</span>
        <!-- <Item :icon="item.meta.icon" :title="item.meta.title"></Item> -->
      </el-menu-item>
    </template>

    <el-submenu v-else :index="item.path" popper-append-to-body>
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span v-if="!sidebar" style="margin-left:10px" slot="title">{{item.meta.title}}</span>
        <!-- <Item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></Item> -->
      </template>
      <sidebarItem v-for="child in item.children" :key="child.path" :item="child" />
    </el-submenu>
  </div>
</template>

<script>
import Item from "./item";
import { mapGetters } from 'vuex';
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
  computed: {
    ...mapGetters(["sidebar"])
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style lang="" scoped>
</style>