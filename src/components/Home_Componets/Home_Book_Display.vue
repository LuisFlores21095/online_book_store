<template>
  <v-card class="Home_BD" elevation="1">
    <v-sheet class=" bgGrey">
      <v-slide-group class="pa-4" show-arrows>
     
          <Book 
          v-for="(book, index) in books"
        :key="index"
        :book="book"/>
      
      </v-slide-group>
    </v-sheet>
  </v-card>
</template>

<script>
import Book from "@/components/Book_Items/Book.vue";

export default {
    props: ["books"],
  name: "Home_Book_Display",
  components: {
    Book
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
