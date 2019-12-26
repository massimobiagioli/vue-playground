const moduleCounter = {
  namespaced: true,
  state: {
    counter: 1000
  },
  mutations: {
    incrementCounter(state, payload) {
      state.counter += payload.amount;
    }
  },
  actions: {
    incrementCounter ({ commit }, payload) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('incrementCounter', payload);
          resolve();
        }, 3000);
      })
    }
  }
};

export default moduleCounter;