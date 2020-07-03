<template>
  <v-card class="ma-4" height="320" width="283">
    <div class="Genre_div_image">
      <img class="Genre_image" alt="logo" src="./../../assets/ex.jpg" />
      <v-card-title class="justify-center">
        <!-- <v-chip :color="colorFunc(this.book.bt_Name)" label>
            {{ this.book.bt_Name }}
          </v-chip> -->
      </v-card-title>
    </div>
    <v-card-title id="HGI_Title" class="justify-center mb-2"
      >Horror</v-card-title
    >
  </v-card>
</template>
<script>
export default {
  name: "Genre",
};
</script>

<style lang="scss" scoped>
#HGI_Title {
  font-weight: 600;
}

.Genre_image {
  height: 100%;
  width: 100%;
}
.Genre_div_image {
  height: 240px;
  width: 150px;
  margin: 10% auto 0;

  .v-chip:before {
    background-color: inherit;
  }
}
</style>
