<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>Kian_</strong>
    </v-col>
  </v-footer>
</template>

<script>
import { Vue } from "vue-property-decorator";
export default class Footer extends Vue {}
</script>

<style scoped>
</style>