<template>
  <v-sheet style="margin-bottom: 50px" class="bgGrey mx-auto" elevation="1" max-width="1400">
    <v-slide-group  class="pa-4" show-arrows>
      <v-slide-item v-for="n in 15" :key="n">
      <Book/>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>



<script>
import Book from "@/components/Book_Items/Book.vue";

export default {
    name: "Home_Book_Display",
    components: {
    Book,
    
  }
}
</script>
<style lang="scss" scoped>



</style>
