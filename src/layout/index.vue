<template>
  <div class="home">
    <v-app id="inspire">
      <Header />
      <Content />
      <Footer />
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Header from "@/layout/header/index.vue";
import Content from "@/layout/content/index.vue";
import Footer from "@/layout/footer/index.vue";
@Component({
  components: {
    HelloWorld,
    Header,
    Content,
    Footer,
  },
})
export default class Home extends Vue {}
</script>