<template>
  <v-card class="Home_BD" elevation="1">
    <v-sheet class=" bgGrey">
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-item v-for="n in 15" :key="n">
          <Genre />
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-card>
</template>

<script>
import Genre from "@/components/Home_Componets/Home_Genre_Item.vue";

export default {
  name: "Home_Book_Display",
  components: {
    Genre
  }
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
