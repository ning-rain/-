<template>
  <div>
    <van-nav-bar fixed :title="title" />
    <router-view class="main"></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      title: "",
    };
  },
  methods: {},
  computed: {},
  watch: {
    $route: {
      handler(newValue) {
        if (newValue.path === "/home") {
          this.title = "首页";
        } else {
          this.title = "搜索";
        }
      },
      immediate: true,
    },
  },
  filters: {},
  components: {},
};
</script>

<style scoped>
.main {
  padding: 46px 0 50px 0;
}
</style>
