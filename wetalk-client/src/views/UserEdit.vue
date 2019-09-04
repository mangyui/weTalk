<template>
  <div class="bgMax">
    <van-nav-bar fixed title="修改资料" left-text="返回" left-arrow  @click-left="$router.go(-1)"></van-nav-bar>
    <div class="my-edit">
      <van-cell-group>
        <van-field
          v-model="user.name"
          label="昵称"
          placeholder="请填写昵称"
        />
        <van-field
          :value="user.sex==1?'男':'女'"
          label="性别"
          placeholder="请填写性别"
          @click="showSex = true"
        />
      </van-cell-group>
      <van-cell-group @click="showArea=true">
        <van-field
          v-model="user.province"
          label="省份"
          placeholder="请填写省份"
        />
        <van-field
          v-model="user.city"
          label="城市"
          placeholder="请填写城市"
        />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-model="user.profile"
          label="签名"
          type="textarea"
          placeholder="介绍下自己吧"
          rows="1"
          autosize
        />
      </van-cell-group>
    </div>
    <van-popup v-model="showSex" position="bottom">
      <van-picker
        show-toolbar
        :columns="['女', '男']"
        title="性别"
        @cancel="showSex = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <van-popup v-model="showArea" position="bottom">
      <van-area :area-list="areaList" :columns-num="2" title="城市"
      :value="user.cityCode"
      @cancel="showArea=false"
      @confirm="areaConfirm"/>
    </van-popup>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import User from '../model/user'
import { areaList } from '@/util/Area.ts'

@Component
export default class UserEdit extends Vue {
  private user: User = this.$store.getters.user
  areaList: JSON = areaList
  showSex: boolean = false
  showArea: boolean = false
  beforeDestroy () {
    this.$store.commit('initUserInfo', this.user)
  }
  onConfirm (value: string, index: number) {
    this.user.sex = index
    this.showSex = false
  }
  areaConfirm (value: Array<any>) {
    this.user.province = value[0].name
    this.user.city = value[1].name
    this.user.cityCode = value[1].code
    this.showArea = false
  }
}
</script>
