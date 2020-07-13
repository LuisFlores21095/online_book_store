<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile elevation="1">
      <v-card-title id="footer_text" class="bgGrey">
        <div class="subheading">Get connected with me on social networks!</div>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark small icon>
          <v-icon color="vueGreen2" size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      icons: ["fab fa-facebook", "fab fa-google-plus", "fab fa-linkedin"]
    };
  }
};
</script>

<style lang="scss" scoped>
#footer_text {
  color: #41b883;
}
</style>
