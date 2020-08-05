<template>
  <div id="BookDetails">
    <Header />
    <div class="BookDetails_Grid">
      <StoreBookPurchase v-if="booksInfo" v-bind:booksInfo="booksInfo" />
      <StoreBookDisplay v-bind:bookInfo="bookInfo" />
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/General_Componets/Header.vue";
import Footer from "@/components/General_Componets/Footer.vue";
import StoreBookDisplay from "@/components/Book_Items/StoreBookDisplay.vue";
import StoreBookPurchase from "@/components/Book_Items/StoreBookPurchase.vue";
import axios from "axios";

export default {
  name: "store",
  components: {
    Header,
    Footer,
    StoreBookDisplay,
    StoreBookPurchase
  },
  created() {
    axios
      .get("http://localhost:5000/book/" + this.$route.params.id)
      .then(response => {
        this.bookInfo = response.data[0];
        this.booksInfo = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  data() {
    return {
      bookInfo: {},
      booksInfo: null
    };
  }
};
</script>

<style lang="scss">
#BookDetails {
  background-color: white;
}
.BookDetails_Grid {
  max-width: 1400px;
  margin: 30px auto;
}
.BookDetails_Grid {
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
}
#storeView {
  background-color: #f7f7f7;

  .card {
    // border: 1px solid rgba(32, 172, 69, 0.96);
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.05);
  }
}

@media (min-width: 1000px) {
  .BookDetails_Grid {
    grid-template-columns: 3fr 5fr;
  }
  #StoreBookDisplay {
    font-size: 1.36rem;
  }
}
</style>
