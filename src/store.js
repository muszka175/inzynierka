import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: false
  },
  mutations: {
    sidebar(state, val) {
      state.sidebar = val;
    }
  }
});