<!--
 * @Description: item.vue
 * @Autor: kangpeng
 * @Date: 2020-02-28 16:24:50
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-28 16:29:48
 -->
<script>
export default {
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  render(h, context) {
    const { icon, title } = context.props;
    const vnodes = [];
    if (icon) {
      vnodes.push(<i class={icon}></i>);
    }
    if (title) {
      vnodes.push(<span slot="title">{title}</span>);
    }
    return vnodes;
  }
};
</script>

<style scoped lang="less">
</style>
