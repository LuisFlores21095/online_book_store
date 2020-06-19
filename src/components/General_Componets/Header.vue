<template>
  <v-app-bar id="Header" elevation="1">
    <img id="Vue_header_logo" alt="logo" src="./../../assets/VueBanner.png" />

    <v-tabs class="d-none d-md-flex" color="vueGreen">
      <v-tab v-for="(item, i) in tabItems" :key="i">{{ item }}</v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-btn icon color="vueGreen" vueGreen class="d-none d-md-flex">
      <span class="material-icons">login</span>
    </v-btn>

    <v-btn icon color="vueGreen" class="d-none d-md-flex">
      <span class="material-icons">shopping_cart</span>
    </v-btn>

    <!-- <v-btn icon color="vueGreen" class="d-flex d-sm-none">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> -->

    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="vueGreen"
          class="d-flex d-md-none"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    tabItems: ["Home", "Books", "Contact", "About"],
    items: ["temp"],
  }),
};
</script>

<style lang="scss" scoped>
#header_title {
  font-size: 30px;
  font-weight: bold;
  color: #35a573;
}

#Vue_header_logo {
  width: 300px;
  padding-left: 0px;
  margin-right: 20px;
}

@media (min-width: 1400px) {
#Vue_header_logo {
  padding-left: 20px;
 
}
}
</style>
