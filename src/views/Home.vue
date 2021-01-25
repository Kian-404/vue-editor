<template>
  <div class="home">
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="12">
        <v-card :color="item.color" dark @click="showInfo(item)">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  v-if="item.artist === 'Ellie Goulding'"
                  class="ml-2 mt-3"
                  fab
                  icon
                  height="40px"
                  right
                  width="40px"
                >
                  <v-icon>mdi-play</v-icon>
                </v-btn>

                <v-btn v-else class="ml-2 mt-5" outlined rounded small>
                  START RADIO
                </v-btn>
              </v-card-actions>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination v-model="page" class="my-4" :length="15"></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  selectedItem = 1;
  page = 1;
  items = [
    {
      color: "#1F7087",
      src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      title: "Supermodel",
      artist: "Foster the People",
    },
    {
      color: "#952175",
      src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
      title: "Halcyon Days",
      artist: "Ellie Goulding",
    },
    {
      color: "#1F7087",
      src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      title: "Supermodel",
      artist: "Foster the People",
    },
    {
      color: "#952175",
      src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
      title: "Halcyon Days",
      artist: "Ellie Goulding",
    },
    {
      color: "#1F7087",
      src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
      title: "Supermodel",
      artist: "Foster the People",
    },
    {
      color: "#952175",
      src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
      title: "Halcyon Days",
      artist: "Ellie Goulding",
    },
  ];
  showInfo(item: unknown) {
    console.log(item);
  }
}
</script>
