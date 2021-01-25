<template>
  <v-app-bar app color="white" flat>
    <!-- <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar> -->

    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="(link, index) in links" :key="index" @click="activeLink(link)">
        {{ link.name }}
      </v-tab>
    </v-tabs>

    <!-- <v-avatar
      class="hidden-sm-and-down"
      color="grey darken-1 shrink"
      size="32"
    ></v-avatar> -->
  </v-app-bar>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  links = [
    {
      name: "首页",
      router: "/",
    },
    {
      name: "分类",
      router: "/category",
    },
    {
      name: "时间轴",
      router: "/timeline",
    },
    {
      name: "关于",
      router: "/about",
    },
  ];
  activeLink(link) {
    console.log(link);
    this.$router.push(link.router)
  }
}
</script>

<style scoped>
</style>