<script>
export default {
  beforeCreate() {},
  created() {
    // var sr = require.context("@/pages", true, /\.vue$/);
    // console.log(require.context("@/pages", true, /\.vue$/)());
    // this.$router.beforeEach((to, from, next) => {
    //   console.log(to, from);
    //   uni.redirectTo({url:'/pages/index/nologin'})
    //   // uni.navigateTo({
    //   //   url: "/pages/index/nologin"
    //   // });
    //   // console.log(next());
    //   // next({fullPath:'/pages/index/nologin',NAVTYPE: 'replaceAll' });
    // });
  },
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
</script>

<style>
/*每个页面公共css */
</style>
