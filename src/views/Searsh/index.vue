<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      shape="round"
      @input="handleInput"
    />
    <template v-if="searchList.length === 0">
      <h3>热门搜索</h3>
      <van-button
        plain
        round
        size="small"
        v-for="(item, index) in hotList"
        :key="index"
        @click="handleClick(item.first)"
        >{{ item.first }}</van-button
      >
    </template>
    <template v-else>
      <h3>最佳推荐</h3>
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <SongItem
          v-for="(item, index) in searchList"
          :key="index"
          :item="item"
        ></SongItem>
      </van-list>
    </template>
  </div>
</template>

<script>
import SongItem from "@/components/SongItem.vue";
import { hotSearch, searchResult } from "@/api/search";
let timer = null;
export default {
  created() {
    this.getHotSearch();
  },
  data() {
    return {
      value: "",
      hotList: [],
      searchList: [],
      limit: 20, // 每一页数量
      offset: 0, //偏移量
      loading: false,
      finished: false,
      page: 1, // 当前搜索结果的页码
    };
  },
  methods: {
    async getHotSearch() {
      try {
        const res = await hotSearch();
        this.hotList = res.data.result.hots;
      } catch (err) {
        console.log(err);
      }
    },
    handleInput(value) {
      clearTimeout(timer); // 防抖
      timer = setTimeout(async () => {
        try {
          const res = await searchResult({
            keywords: value,
            limit: this.limit,
            offset: this.offset,
          });
          if (res.data.result.songCount === 0) {
            this.finished = true;
          }
          this.searchList.push(...res.data.result.songs);
          this.loading = false;
        } catch (err) {
          console.log(err);
        }
      }, 900);
    },
    handleClick(first) {
      this.value = first;
      this.handleInput(first);
    },
    onLoad() {
      // this.offset++;
      this.page++;
      (this.offset = (this.page - 1) * 20), this.handleInput(this.value);
    },
  },
  computed: {},
  watch: {
    value() {
      this.finished = false;
      this.offset = 0;
      this.searchList = [];
    },
  },
  filters: {},
  components: {
    SongItem,
  },
  beforeDestroy() {
    // 离开当前组件清除定时器
    clearTimeout(timer);
  },
};
</script>

<style scoped>
h3 {
  font-size: 12px;
}
.van-button {
  margin: 0 4px;
}
</style>
