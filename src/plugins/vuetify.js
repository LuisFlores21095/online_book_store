import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        vueGreen: "#41b883",
        bgGrey: "#e9ecef",
        vueGreen2: "#34495E"
      }
    }
  }
});
