<template>
  <v-app-bar id="Header" elevation="1">
    <img id="Vue_header_logo" alt="logo" src="./../../assets/VueBanner.png" />

    <v-tabs
      optional
      class="d-none d-md-flex"
      color="vueGreen"
      v-model="active_tab"
    >
      <v-tab v-for="tab in tabItems" :key="tab.id" :to="tab.route">{{
        tab.name
      }}</v-tab>
    </v-tabs>

    <v-spacer></v-spacer>

    <v-menu v-if="userCheck" :close-on-content-click="false" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          text
          color="vueGreen"
          class="d-none d-md-flex"
          v-bind="attrs"
          v-on="on"
        >
          <span class="material-icons">person </span>
        </v-btn>
      </template>
      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <span style="font-size: 40px;" class="material-icons"
                >account_circle
              </span>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title
                >{{ userCheck.firstName
                }}{{ userCheck.lastName }}</v-list-item-title
              >
              <v-list-item-subtitle>{{ userCheck.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
          <v-btn block text color="primary"  @click="signOut">Sign Out</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>

    <v-btn
      to="/login"
      v-if="userCheck == null"
      icon
      color="vueGreen"
      class="d-none d-md-flex"
    >
      <span class="material-icons">login </span>
    </v-btn>

    <v-btn icon color="vueGreen" class="d-none d-md-flex">
      <span class="material-icons">shopping_cart</span>
    </v-btn>

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
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Header",
  data: () => ({
    tabItems: [
      { id: 1, name: "Home", route: `/` },
      { id: 2, name: "Book", route: `/books` },
      { id: 3, name: "About", route: `/about` },
      { id: 4, name: "Contact", route: `/contact` },
    ],
    tabItemsMap: { "/": 0, "/books": 1, "/contacts": 2, "/about": 3 },
    currentRoute: String,
    active_tab: "",
    items: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
  }),
  mounted: function() {
    this.active_tab = this.tabItemsMap[this.$route.path];
  },
  computed: {
    ...mapGetters(["userCheck"]),
  },
  methods:{
    ...mapMutations(["clearUser"]),

   signOut(){
     this.clearUser();
     this.$router.push('/login');

   }
   
  }
};
</script>

<style lang="scss" scoped>
#header_title {
  font-size: 30px;
  font-weight: bold;
  color: #35a573;
}
#Header {
  .v-btn:not(.v-btn--round).v-size--default {
    padding: 0;
  }

  .material-icons{
    font-size: 27px;
  }
}
#Vue_header_logo {
  width: 200px;
  padding-left: 0px;
  margin-right: 20px;
}
@media (min-width: 500px) {
  #Vue_header_logo {
    width: 250px;
  }
}
@media (min-width: 1400px) {
  #Vue_header_logo {
    padding-left: 20px;
  }
}
</style>
