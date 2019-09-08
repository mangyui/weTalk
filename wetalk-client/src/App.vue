<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive exclude="WorldRoom,MyMap">
        <router-view class="Router"/>
      </keep-alive>
    </transition>
    <transition name="slideleft">
      <AudioBox/>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

import AudioBox from '@/components/AudioBox.vue' // 要写完整.vue

export default Vue.extend({
  name: 'App',
  components: {
    AudioBox
  },
  computed: {
    ...mapGetters(['isleft', 'isright'])
  },
  data () {
    return {
      transitionName: 'slideleft'
    }
  },
  watch: {
    $route () { // 监听路由变化重新赋值
      if (this.isleft) {
        this.transitionName = 'slideleft'
      }
      if (this.isright) {
        this.transitionName = 'slideright'
      }
      this.$toast.clear()
    }
  }
})
</script>

<style lang="less" scoped>
#app{
  position: relative;
  overflow-x: hidden;
  width: 100%;
}
.Router {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all 0.28s ease;
  opacity: 1;
}
.slideleft-enter,
 .slideright-leave-active {
  opacity: 0;
  transform: translate(100%, 0);
}
.slideleft-leave-active,
.slideright-enter {
  opacity: 0;
  transform: translate(-100%, 0);
}
</style>
