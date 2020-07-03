<template>
  <div class="home">
    <Header />
    <HomeBanner />
    <HomeDisplayNameSlider :leftText="firstLT" :rightText="firstRT" />
    <HomeBookDisplay />
    <HomeDisplayNameSlider :leftText="secondLT" :rightText="firstRT" />
    <HomeBookDisplay />
    <HomeDisplayNameSlider :leftText="thirdLT" :rightText="thirdRT" />
    <HomeGenresDisplay />
    <Footer/>
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
      thirdLT : "Genres",
      thirdRT : "Show All Genres"
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
