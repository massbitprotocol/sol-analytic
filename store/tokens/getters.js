export default {
  list(state) {
    return state.list;
  },

  getByID: (state) => (id) => {
    return state.list.find((item) => item.id === id);
  },
};
