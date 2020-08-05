<template>
  <v-card class="Home_BD" elevation="1">
    <v-sheet class=" bgGrey">
      <v-slide-group class="pa-4" show-arrows>
        <Genre v-for="(genre, index) in genres" :key="index" :genre="genre" />
      </v-slide-group>
    </v-sheet>
  </v-card>
</template>

<script>
import Genre from "@/components/Home_Componets/Home_Genre_Item.vue";

export default {
  name: "Home_Book_Display",
  components: {
    Genre,
  },
  data() {
    return {
      genres: [
        {
          genre: "Mystery",
          imgLink: "https://www.amazon.com/images/I/51lg-Ry4ghL.jpg",
        },
        {
          genre: "Horror",
          imgLink:
            "https://www.amazon.com/images/I/41U1hD774eL._SX327_BO1,204,203,200_.jpg",
        },
        {
          genre: "Drama",
          imgLink:
            "https://www.amazon.com/images/I/51aqO0QLrfL._SX342_BO1,204,203,200_.jpg",
        },
        {
          genre: "Romance",
          imgLink: "https://www.amazon.com/images/I/51hwK+W-SFL.jpg",
        },
        {
          genre: "Sci-Fi",
          imgLink: "https://www.amazon.com/images/I/51QJor9eDjL.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.Home_BD {
  margin: 0px 8px 50px;
}
@media (min-width: 1400px) {
  .Home_BD {
    max-width: 1400px;
    margin: 0px auto 50px;
  }
}
</style>
