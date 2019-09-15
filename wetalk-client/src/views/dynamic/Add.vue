<template>
  <div class="bgWhite max1100">
    <van-nav-bar class="litheme" :border="false" title="发动态" fixed left-arrow right-text="发布"
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
        <van-cell icon="label" title="添加标签" is-link value="记录这一刻" />
      </van-cell-group>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
})
export default class DynamicAdd extends Vue {
  text: string =''
  fileList: Array<any> = []
  toPublish () {
    if (this.text.trim() === '') {
      this.$toast('你输入点内容会死吗？')
      return
    }
    console.log(this.fileList)
    this.$dialog.confirm({
      title: '确认发表该动态？'
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

<style lang="less" scoped>

</style>
