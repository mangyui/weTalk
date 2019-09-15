<template>
  <div class="bgWhite max1100">
    <form class="fix-top search-box" action="/">
      <van-search
        v-model="text"
        placeholder="搜索帖子/用户"
        show-action
        @search="onSearch"
        @cancel="$store.commit('GOBACK')"
      />
    </form>
    <van-tabs v-model="active" swipeable sticky :border="false" line-width="26" :offset-top="44">
      <!-- <van-tab title="话题" name="tag">
      </van-tab> -->
      <van-tab title="帖子" name="post">
      </van-tab>
      <van-tab title="用户" name="user">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class Search extends Vue {
  text: string =''
  active: string = 'post'
  onSearch () {

  }
  created () {
  }
}
</script>
