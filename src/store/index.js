import Vue from "vue";
import Vuex from "vuex";
const STORAGE_KEY = "User";

Vue.use(Vuex);
let StorageUser = window.localStorage.getItem(STORAGE_KEY);

export default new Vuex.Store({
  state: {
    filterData: {},
    User: StorageUser ? JSON.parse(StorageUser) : null
  },
  mutations: {
    ADD_FILTER_DATA: (state, data) => {
      state.filterData = Object.assign({}, data);
    },

    LOGIN_SUCCESS(state, respnse) {
      state.User = respnse;
      this.commit("saveUser");
    },
    saveUser(state){
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.User));
    },
    clearUser(state){
      state.User = null;
      this.commit("saveUser");
    }
  },
  actions: {},
  modules: {},
  getters:{
    userCheck(state){
        return state.User;
    }
  }
});
