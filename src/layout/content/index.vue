<!--
 * @Version: 
 * @Company: Venus
 * @Date: 2021-01-21 14:16:25
 * @LastEditors: Kian_
 * @LastEditTime: 2021-01-21 14:32:31
-->
<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-row>
        <!-- <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="268">
          </v-sheet>
        </v-col> -->

        <v-col cols="12" sm="12">
          <v-sheet min-height="70vh" rounded="lg">
            <!--  -->
            <router-view />
          </v-sheet>
        </v-col>

        <!-- <v-col cols="12" sm="2">
          <v-sheet rounded="lg" min-height="268">
          </v-sheet>
        </v-col> -->
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style scoped>
</style>