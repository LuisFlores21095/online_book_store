<template>
  <div class="register">
    <Header />
    <Register />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/General_Componets/Header.vue";
import Footer from "@/components/General_Componets/Footer.vue";
import Register from "@/components/Login_Componets/Register.vue";

export default {
  name: "register",
  components: {
    Header,
    Footer,
    Register
  },
  data() {
    return {
      firstLT: "Best Sellers",
      firstRT: "Show All Books",
      secondLT: "Top Rated"
    };
  }
};
</script>

<style lang="scss" scoped></style>
