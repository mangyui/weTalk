<template>
  <div class="bgMax">
    <van-nav-bar fixed title="设置" left-arrow
      @click-left="$store.commit('GOBACK')"></van-nav-bar>
    <div class="my-edit max1100">
      <van-cell-group>
        <van-cell title="账户安全" is-link />
      </van-cell-group>
      <van-cell-group>
        <van-cell title="关于盲鱼" is-link />
        <van-cell value="1.0.1" is-link>
          <template slot="title">
            <span class="custom-title">检查更新</span>
            <van-tag type="danger">NEW</van-tag>
          </template>
        </van-cell>
      </van-cell-group>
      <van-button class="max-btn" plain hairline type="danger">退出</van-button>
    </div>
  </div>
</template>
