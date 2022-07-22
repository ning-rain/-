<template>
  <div class="home-container">
    <div class="tuijian">
      <h3>推荐歌单</h3>
      <van-row gutter="6">
        <van-col span="8" v-for="item in recommentList" :key="item.id">
          <van-image :src="item.picUrl" />
          <div class="van-multi-ellipsis--l2">
            {{ item.name }}
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="new">
      <h3>最新音乐</h3>
      <van-cell-group>
        <SongItem v-for="item in newList" :key="item.id" :item="item"></SongItem>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem.vue";
import { recommendMusicMenu, newMusic } from "@/api/home";
export default {
  created() {
    this.getRecommendList();
    this.getNewList();
  },
  data() {
    return {
      recommentList: [],
      newList: [],
    };
  },
  methods: {
    async getRecommendList() {
      try {
        const res = await recommendMusicMenu(6);
        this.recommentList = res.data.result;
      } catch (err) {
        console.log(err);
      }
    },
    async getNewList() {
      try {
        const res1 = await newMusic(10);
        this.newList = res1.data.result;
      } catch (err) {
        console.log(err);
      }
    },
  },
  computed: {},
  watch: {},
  filters: {},
  components: {
    SongItem,
  },
};
</script>

<style scoped lang="less">
.home-container {
  background-color: #eee;
  .tuijian,
  .new {
    h3 {
      font-size: 20px;
      color: #333;
    }
  }
}

.van-image {
  /deep/ img {
    width: 122px;
    height: 122px;
  }
}
.van-multi-ellipsis--l2 {
  font-size: 12px;
}
.van-row {
  padding: 10px 0;
  background-color: #fff;
}
.van-col {
  width: 125px;
  height: 160px;
  overflow: hidden;
}
</style>
