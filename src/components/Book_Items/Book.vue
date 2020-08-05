<template>
  <v-card @click="hello" class="ma-4" height="500" width="283">
   
    <!-- original 590 height -->
    <div class="book_div_image">
      <img class="book_image" :src="getLink(this.book.b_ISBN)" />
      <v-card-title class="justify-center">
        <!-- <v-chip :color="colorFunc(this.book.bt_Name)" label>
            {{ this.book.bt_Name }}
          </v-chip> -->
      </v-card-title>
    </div>
    <v-card-title>{{this.book.b_name}}</v-card-title>
    <v-card-subtitle class="py-0">by {{ this.book.a_Name }}</v-card-subtitle>
    <div class="book_contain">
      <v-card-text
        ><div>
          {{this.book.b_description}}
        </div>
      </v-card-text>
    </div>
    <!-- <v-card-title class="display_price py-1">Price: $3.99</v-card-title>
    <div class="book_button_div">
      <v-row>
        <v-col class="d-flex" cols="12" sm="5" xsm="12">
          <v-btn
            text
            tile
            block
            color="vueGreen2 lighten-1"
            class="white--text"
            @click="$router.push('/store/book/' + book_isbn)"
            >Details</v-btn
          >
        </v-col>

        <v-spacer></v-spacer>
        <v-col class="d-flex" cols="12" sm="7" xsm="12">
          <v-btn text tile block color="vueGreen" class="mr-4 white--text">
            Add to cart
          </v-btn>
        </v-col>
      </v-row>
    </div> -->
  </v-card>
  
</template>
<script>
export default {
    props: ["book"],
  name: "Book",
  methods: {
    getLink(val) {
      let temp = "http://covers.openlibrary.org/b/isbn/" + val + "-L.jpg";
      return temp;
    }
  }
};
</script>

<style lang="scss" scoped>
.display_price {
  font-size: 1.1rem;
  color: rgba(85, 85, 85, 0.897);
}
.book_image {
  height: 100%;
  width: 100%;
}
.book_div_image {
  height: 240px;
  width: 150px;
  margin: 10% auto;

  .v-chip:before {
    background-color: inherit;
  }
}
.book_button_div {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0;
}

.book_contain {
  display: block;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  max-height: 9em;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    font-size: 0.8em;
  }
}

.v-card--link:before {
  background: none;
}
</style>
