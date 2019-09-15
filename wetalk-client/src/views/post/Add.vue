<template>
  <div class="bgWhite max1100">
    <van-nav-bar class="litheme" :border="false" title="发帖子" fixed left-arrow right-text="发表"
      @click-left="$store.commit('GOBACK')"
      @click-right="toPublish"
       />
    <van-field
      v-model="text"
      type="textarea"
      placeholder="请输入内容"
      rows="6"
      autosize
    />
    <div class="pad15">
      <van-uploader
        :preview-size="100"
        v-model="fileList"
        multiple
        :max-count="9"
      />
    </div>
    <div class="pad15">
      <van-cell-group>
        <van-cell icon="smile-comment" title="添加话题" is-link value="沙雕俱乐部" />
      </van-cell-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class PostAdd extends Vue {
  text: string =''
  fileList: Array<any> = []
  toPublish () {
    if (this.text.trim() === '') {
      this.$toast('你输入点内容会死吗？')
      return
    }
    console.log(this.fileList)
    this.$dialog.confirm({
      title: '确认发表该帖子？'
    }).then(() => {
      this.text = ''
      this.fileList = []
    }).catch(() => {
      // on cancel
    })
  }
  created () {
  }
}
</script>
