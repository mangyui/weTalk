<template>
  <div class="open_window">
    <iframe :src="$route.params.url" frameborder="0"></iframe>
    <div class="close-btn">
      <van-icon name="cross" color="#f8f8f8" @click="$store.commit('GOBACK')"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  beforeRouteEnter (to: any, from: any, next: any) {
    next((vm: any) => {
      // 通过 `vm` 访问组件实例,将值传入oldUrl
      vm.oldUrl = from.path
    })
  }
})
export default class Applications extends Vue {
  text: string = ''
  oldUrl: string = '/'
  created () {
  }
}
</script>

<style lang="less" scoped>
.open_window{
  position: relative;
  font-size: 0;
  iframe{
    width: 100%;
    height: 100%;
  }
}
.close-btn{
  position: fixed;
  right: -22px;
  top: 50%;
  transform: translateY(-20px);
  width: 40px;
  height: 40px;
  z-index: 999;
  background: #f44;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(20, 10, 10, 0.5);
  opacity: 0.85;
  display: flex;
  align-items: center;
  padding: 7px;
  i{
    font-size: 22px;
  }
}
</style>
