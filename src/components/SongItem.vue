<template>
  <van-cell
    :title="item.name"
    size="large"
    center
    @click="$router.push({ path: '/play', query: { id: item.id } })"
  >
    <van-icon name="play-circle-o" size="0.7rem" color="#333" />
    <template #label>
      <template v-if="item.song">
        <span v-for="(item1, index1) in item.song.artists" :key="index1"
          >{{ item1.name }}
          <!-- 下面的代码的意思:最后一个作者,右边不加斜线 -->
          {{ index1 === item.song.artists.length - 1 ? "" : "/" }}</span
        ><span>- {{ item.name }}</span>
      </template>
      <template v-else>
        <span v-for="(item1, index1) in item.ar" :key="index1"
          >{{ item1.name }}
          <!-- 下面的代码的意思:最后一个作者,右边不加斜线 -->
          {{ index1 === item.ar.length - 1 ? "" : "/" }}</span
        ><span>- {{ item.name }}</span>
      </template>
    </template>
  </van-cell>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  created() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  filters: {},
  components: {},
};
</script>

<style scoped>
</style>
