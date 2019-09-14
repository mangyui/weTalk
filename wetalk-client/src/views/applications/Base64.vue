<template>
  <div class="bgMax max1100">
    <van-nav-bar class="litheme" :border="false" fixed title="base64转码" left-arrow
      :right-text="isJie?'解码':'编码'"
      @click-left="$store.commit('GOBACK')"
      @click-right="showSetting=true">
    </van-nav-bar>
    <div class="content-padd">
      <div>
        <textarea class="text-input" name="text" id="yuan" cols="30" rows="10" v-model="text"></textarea>
      </div>
      <van-button class="base-btn" icon="exchange" type="info" :loading="isLoading" @click="toChange">转换</van-button>
      <div>
        <textarea class="text-input" name="result" id="guo" cols="30" rows="10" v-model="result"></textarea>
      </div>
    </div>
    <van-action-sheet
      v-model="showSetting"
      :actions="actions"
      cancel-text="取消"
      @select="onSelect"
      @cancel="showMore=false"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Base64 extends Vue {
  showSetting: boolean = false
  isJie: boolean = true
  text: string = ''
  result: string = ''
  isLoading: boolean = false
  actions: Array<any> = [
    { name: '解码', color: '#ee0a24' },
    { name: '编码', color: '#555' }
  ]
  onSelect (item: any, index: number) {
    if (index === 0 && this.isJie !== true) {
      this.isJie = true
      this.$toast('已更换为解码')
      this.actions[0].color = '#ee0a24'
      this.actions[1].color = '#555'
    } else if (index === 1 && this.isJie === true) {
      this.isJie = false
      this.$toast('已更换为编码')
      this.actions[0].color = '#555'
      this.actions[1].color = '#ee0a24'
    }
    this.showSetting = false
  }
  toChange () {
    if (this.text !== '') {
      this.isLoading = true
      if (this.isJie) {
        this.result = window.atob(this.text)
      } else {
        this.result = window.btoa(this.text)
      }
      this.isLoading = false
    }
  }
  created () {
  }
}
</script>

<style lang="less" scoped>
.content-padd{
  padding: 15px;
  .text-input{
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 3px;
    resize:none;
  }
  .base-btn{
    width: 100%;
    margin: 15px 0;
  }
}
</style>
