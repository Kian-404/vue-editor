<template>
  <div class="page-404-vue">
    <div class="background-image"></div>
    <p>您访问的页面不存在~~</p>
      <v-btn elevation="2" color="primary">click me</v-btn>
    <v-btn rounded color="primary" @click="gotoback"> 返回首页 </v-btn>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.init();
  },
  methods: {
    // init() {},
    gotoback() {
      if (process.env.NODE_ENV === "production") {
        window.location.href = "/app/";
      } else {
        window.location.href = "/";
      }
    },
  },
  computed: {},
};
</script>
<style lang='scss' scoped>
.page-404-vue {
  justify-content: center; //子元素水平居中
  align-items: center; //子元素垂直居中
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #ffffff;
  .background-image {
    height: 400px;
    width: 400px;
    flex-basis: 400px;
    text-align: center;
    background-image: url(./404.png);
    background-repeat: no-repeat;
    background-position: center center;
  }
}
</style>