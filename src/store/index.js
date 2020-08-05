import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
const STORAGE_KEY = "User";

Vue.use(Vuex);
let StorageUser = window.localStorage.getItem(STORAGE_KEY);

export default new Vuex.Store({
  state: {
    filterData: {},
    topRated: null,
    topSold: null,
    User: StorageUser ? JSON.parse(StorageUser) : null,
  },
  mutations: {
    ADD_FILTER_DATA: (state, data) => {
      state.filterData = Object.assign({}, data);
    },

    LOGIN_SUCCESS(state, respnse) {
      state.User = respnse;
      this.commit("saveUser");
    },
    saveUser(state) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.User));
    },
    clearUser(state) {
      state.User = null;
      this.commit("saveUser");
    },
    SetTopRated(state, posts) {
      state.topRated = posts;
    },
    SetTopSold(state, posts) {
      state.topSold = posts;
    },
  },
  actions: {
    loadTopRated({ commit }) {
      axios
        .get("http://3.134.90.113/sells/top")
        .then((data) => {
          let posts = data.data;
          commit("SetTopRated", posts);
        })
        .catch((error) => console.log(error));
    },
    loadTopSold({ commit }) {
      axios
        .get("http://3.134.90.113/ratings")
        .then((data) => {
          let posts = data.data;
          commit("SetTopSold", posts);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
  getters: {
    getTopRated(state) {
      return state.topRated;
    },
    userCheck(state) {
      return state.User;
    },
    getTopSold(state) {
      return state.topSold;
    },
  },
});
