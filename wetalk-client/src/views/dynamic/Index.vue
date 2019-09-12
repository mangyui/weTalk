<template>
  <div class="bgMax">
    <van-nav-bar class="litheme" :border="false" title="动态" fixed>
      <van-icon name="plus" slot="right" />
    </van-nav-bar>
    <div>动态</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Dynamic extends Vue {
}
</script>

<style lang="less" scoped>
</style>
