<template>
  <div class="home">
    <Header />
    <HomeBanner />
    <HomeDisplayNameSlider  :leftText="firstLT" :rightText="firstRT" />
    <HomeBookDisplay :books="getTopRated"/>
    <HomeDisplayNameSlider :leftText="secondLT" :rightText="firstRT" />
    <HomeBookDisplay :books="getTopSold" />
    <HomeDisplayNameSlider :leftText="thirdLT" :rightText="thirdRT" />
    <HomeGenresDisplay />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/General_Componets/Header.vue";
import HomeBanner from "@/components/Home_Componets/Home_Banner.vue";
import HomeDisplayNameSlider from "@/components/Home_Componets/Home_DisplayName_Slide.vue";
import HomeBookDisplay from "@/components/Home_Componets/Home_Book_Display.vue";
import Footer from "@/components/General_Componets/Footer.vue";
import HomeGenresDisplay from "@/components/Home_Componets/Home_Genres_Display.vue";
import {mapGetters} from 'vuex'

export default {
  name: "Home",


  components: {
    Header,
    HomeBanner,
    HomeDisplayNameSlider,
    HomeBookDisplay,
    HomeGenresDisplay,
    Footer
  },

  data() {
    return {
      firstLT: "Best Sellers",
      firstRT: "Show All Books",
      secondLT: "Top Rated",
      thirdLT: "Genres",
      thirdRT: "Show All Genres"
    };
  } ,
    beforeMount(){
     this.$store.dispatch('loadTopRated'),
     this.$store.dispatch("loadTopSold")
   },
      computed:{
    ...mapGetters(['getTopRated']),
    ...mapGetters(["getTopSold"])
   }

};
</script>

<style lang="scss" scoped></style>
