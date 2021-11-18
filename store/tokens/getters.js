export default {
  list(state) {
    return state.list;
  },

  solPrice(state) {
    return state.solPrice;
  },

  getByID: (state) => (id) => {
    return state.list.find((item) => item.id === id);
  },
};
