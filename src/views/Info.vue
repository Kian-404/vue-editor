<template>
  <div>{{articleId}}</div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Info extends Vue {
  articleId = null;
  mounted() {
    this.articleId = this.$route.params.id;
    console.log(this.articleId);
  }
}
</script>

<style scoped>
</style>