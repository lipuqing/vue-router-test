<template>
	<div class="conent"></div>
</template>

<script>
export default {
  data() {
    return {
      title: "index",
    };
  },
  onLoad() {},
  mounted() {
    this.$pay({
      isShow: true,
      click: (ex) => {
        console.log(ex);
      },
    });
  },
  methods: {
    jump() {
      console.log("jump");
      uni.navigateTo({
        url: "/pages/index/log",
        params: { un: "555" },
      });
    },
  },
};
</script>

<style>
.content {
  text-align: center;
  height: 400upx;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: #8f8f94;
}
</style>
