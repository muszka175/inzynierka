import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSidebar: false
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebar = !state.isSidebar;
    }
  }
});