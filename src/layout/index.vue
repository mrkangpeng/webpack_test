<!--
 * @Description: 
 * @Autor: kangpeng
 * @Date: 2020-02-26 13:42:21
 * @LastEditors: kangpeng
 * @LastEditTime: 2020-02-27 17:29:04
 -->
 <template>
  <div id="app_wrap">
    <div class="sideBar_wrap">
      <SideBar />
    </div>
    <div class="main_wrap">
      <NavBar />
      <AppMain />
    </div>
  </div>
</template>
 
 <script>
import { mapGetters } from "vuex";
import NavBar from "./components/NavBar";
import AppMain from "./components/AppMain";
import SideBar from "./components/SideBar/index";
export default {
  components: {
    SideBar,
    NavBar,
    AppMain
  },
  props: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>
 
 <style scoped lang="less">
#app_wrap {
  display: flex;
  .main_wrap {
    width: 100%;
  }
}
</style>
 
