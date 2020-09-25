<template>
  <div class="mask" v-if="isShow">
    <div class="model_box">
      <div class="title_box">
        <p class="title">选择支付方式</p>
        <img
          class="close"
          @click="close"
          src="https://img.singschool.cn/wl/file/20200511120447060-1856197503.png?imageMogr2/crop/!88x88a14a16"
        />
      </div>
      <p class="money">
        <span class="icon_money">￥</span>
        <span class="price din_a_bold">{{price}}</span>
      </p>
      <div class="way_box" @click="change_pay('wx')">
        <img
          class="img_left"
          src="https://img.singschool.cn/wl/file/20200511120447060-1856197503.png?imageMogr2/crop/!56x56a282a32"
          alt
        />
        <p class="text_pay">微信支付</p>
        <img
          class="img_right"
          :src="payType=='wx'?'https://img.singschool.cn/wl/file/20200511120447060-1856197503.png?imageMogr2/crop/!40x40a122a40':'https://img.singschool.cn/wl/file/20200512192005824-698966670.png'"
          alt
        />
      </div>
      <p class="change" @click="change">
        选择其他支付方式
        <img
          :class="left? 'rotate1':'rotate'"
          src="https://img.singschool.cn/wl/file/20200511120447060-1856197503.png?imageMogr2/crop/!88x88a454a16"
          alt
        />
      </p>
      <div class="way_box" @click="change_pay('alipay')" :class="left?'height':'noheight'">
        <img
          class="img_left"
          src="https://img.singschool.cn/wl/file/20200511120447060-1856197503.png?imageMogr2/crop/!56x56a378a32"
          alt
        />
        <p class="text_pay">支付宝</p>
        <img
          class="img_right"
          :src="payType=='alipay'?'https://img.singschool.cn/wl/file/20200512192131842-18898057.png':'https://img.singschool.cn/wl/file/20200512192005824-698966670.png'"
          alt
        />
      </div>
      <p class="btn" @click="pay(payType)">去支付</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payType: "wx",
      price: 29900,
      left: false
    };
  },
  watch: {
    isShow(e) {
      console.log(e);
    }
  },
  created() {
    if (this.isShow) {
      window.addEventListener("popstate", state => {
        this.isShow = false;
      });
    }
  },
  methods: {
    count(e) {
      return (e / 100).toFixed(2);
    },
    change_pay(e) {
      this.payType = e;
      console.log(e, this.payType);
    },
    change() {
      console.log("选择支付方式");
      this.left = !this.left;
    },
    pay(e) {
      console.log("支付方式为：", e);
      this.click(this.payType);
    },
    onClick(e) {
      this.isShow = false;
    },
    jumpRule() {
      this.isShow = false;
    },
    close(e) {
      this.isShow = false;
    }
  }
};
</script>

<style lang="less" scoped>
//  ====================>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  font-size: 0.14rem;
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  font-family: PingFangSC-Semibold, PingFang SC;
  .model_box {
    width: 2.77rem;
    // height: 3.05rem;
    background: rgba(254, 255, 254, 1);
    border-radius: 0.1rem;
    padding-bottom: 0.24rem;
    .title_box {
      display: flex;
      flex-direction: row;
      position: relative;
      height: 0.44rem;
      margin-bottom: 0.1rem;
      .title {
        flex: 1;
        font-size: 0.16rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(38, 32, 32, 1);
        text-align: center;
        line-height: 0.44rem;
        margin-top: 0.06rem;
      }
      .close {
        width: 0.44rem;
        height: 0.44rem;
        position: absolute;
        right: 0.06rem;
        top: 0.06rem;
      }
    }
    .money {
      text-align: center;
      font-size: 0.24rem;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: rgba(38, 32, 32, 1);
      margin-bottom: 0.31rem;
      .icon_money {
        font-family: PingFangSC-Semibold, PingFang SC;
      }
      .price {
        font-size: 0.36rem !important;
      }
    }
    .way_box {
      display: flex;
      height: 0.28rem;
      line-height: 0.28rem;
      margin: 0 0.2rem;
      justify-content: space-between;
      .text_pay {
        flex: 1;
        margin-left: 0.2rem;
        text-align: left;
        font-size: 0.16rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(38, 32, 32, 1);
      }
      .img_left {
        width: 0.28rem;
        height: 0.28rem;
      }
      .img_right {
        width: 0.2rem;
        height: 0.2rem;
        margin-top: 0.03rem;
      }
    }
    .btn {
      width: 2.37rem;
      height: 0.44rem;
      line-height: 0.44rem;
      background: rgba(7, 193, 96, 1);
      border-radius: 0.22rem;
      text-align: center;
      margin: 0 auto;
      margin-top: 0.38rem;
      font-size: 0.16rem;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: rgba(255, 255, 255, 1);
    }
    .change {
      height: 0.44rem;
      line-height: 0.44rem;
      font-size: 0.14rem;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(128, 124, 124, 1);
      text-align: center;
      position: relative;
      margin: 0 0.5rem;
      margin-top: 0.1rem;
      margin-top: 0.1rem;
      img {
        width: 0.44rem;
        height: 0.44rem;
        position: absolute;
        top: 0;
        right: -0.05rem;
      }
    }
    // .alipay {
    // }
    // .down {
    // }
    .rotate1 {
      transform: rotate(90deg);
      transition: all 0.5s;
    }
    .rotate {
      //初始状态的旋转位置
      transform: rotate(0);
      transition: all 0.5s;
    }
    .noheight {
      height: 0;
      display: none;
      transition: all 1s;
    }
    .height {
      height: 0.28rem;
      display: flex;
      transition: all 1s;
    }
  }
}

.container {
  width: 100%;
}
</style>
