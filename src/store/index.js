import Vue from 'vue';
import Vuex from 'vuex';
import moduleCounter from './moduleCounter';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter: moduleCounter
  }
});