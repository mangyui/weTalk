<template>
  <div class="bgMax">
    <van-nav-bar class="litheme" :border="false" fixed title="" left-arrow
      @click-left="$store.commit('GOBACK')"></van-nav-bar>
      <div class="login-wrap">
        <div class="my-logo">
          <img :src="'./imgs/ico.png'">
        </div>
        <div class="login-box">
          <div class="login-item">
            <van-icon name="phone-o" />
            <input placeholder="手机号" type="text">
          </div>
          <div class="login-item">
            <van-icon name="certificate" />
            <input placeholder="验证码" type="text">
            <van-button class="code-btn" size="small" color="#16cff0">发送验证码</van-button>
          </div>
        </div>
        <van-button class="max-btn"  color="#16cff0">登录</van-button>
        <div class="login-footer">
          <van-divider>其他登录方式</van-divider>
          <div class="login-more">
            <div>
              <van-icon name="./icons/QQ.svg" />
              <p>QQ</p>
            </div>
            <div>
              <van-icon name="./icons/weibo.svg" />
              <p>微博</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Login extends Vue {

}

</script>

<style lang="less" scoped>
.bgMax{
  background: #fff;
  background: linear-gradient(to top,#7678f2,#8b81f9)!important;
}
.login-wrap{
  max-width: 780px;
  margin: 0 auto;
  padding: 0 20px;
}
.login-box{
  padding: 20px;
}
.login-item{
  display: flex;
  align-items: center;
  padding: 5px 0;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  .van-icon{
    font-size: 25px;
    color: #16cff0;
    margin-right: 10px;
  }
  input{
    flex-grow: 1;
    background: transparent;
    border: 0;
    font-size: 15px;
    color: #f9f9f9;
    &::-webkit-input-placeholder{
      color: #ccc;
    }
  }
}
.login-footer{
  margin-top: 30px;
  padding: 20px;
  p,.van-divider{
    color: #ccc;
  }
  .van-icon{
    font-size: 30px;
  }
  .login-more{
    display: flex;
    align-items: center;
    justify-content: space-around;
    >div{
      text-align: center;
    }
  }
}
.code-btn{
  min-width: 78px;
  padding: 0;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}
</style>
