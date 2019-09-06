<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive exclude="WorldRoom">
        <router-view class="Router"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'App',
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
    }
  }
})
</script>

<style lang="less" scoped>
.Router {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all .28s ease;
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
