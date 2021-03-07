import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    correctPoints: 0,
  },
  mutations: {
    incrementPoints(state, payload) {
      state.correctPoints = payload;
    },
  },
  actions: {},
  modules: {},
});
