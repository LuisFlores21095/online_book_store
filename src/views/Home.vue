<template>
  <div class="home">
    <Header />
    <HomeBanner />
    <HomeDisplayNameSlider :leftText="firstLT" :rightText="firstRT" />
    <HomeBookDisplay />
    <HomeDisplayNameSlider :leftText="secondLT" :rightText="firstRT" />
    <HomeBookDisplay />
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

export default {
  name: "Home",
  components: {
    Header,
    HomeBanner,
    HomeDisplayNameSlider,
    HomeBookDisplay,
    Footer
  },
  data() {
    return {
      firstLT: "Best Sellers",
      firstRT: "Show All Books",
      secondLT: "Top Rated",
    };
  },
};
</script>

<style lang="scss" scoped></style>
