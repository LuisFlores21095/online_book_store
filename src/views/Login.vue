<template>
  <div class="login">
    <Header />
    <Login />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/General_Componets/Header.vue";
import Footer from "@/components/General_Componets/Footer.vue";
import Login from "@/components/Login_Componets/Login.vue";

export default {
  name: "login",
  components: {
    Header,
    Footer,
    Login
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
