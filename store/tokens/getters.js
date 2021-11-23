import { cloneDeep } from 'lodash';

export default {
  list(state) {
    return state.list;
  },

  current(state) {
    if (state.current) {
      let token = cloneDeep(state.current);

      if (state.list && state.list.length > 0) {
        const _token = state.list.find((item) => item.address === token.account);
        if (_token) token = Object.assign(token, _token);
      }

      return token;
    }

    return null;
  },

  solPrice(state) {
    return state.solPrice;
  },

  getByID: (state) => (id) => {
    return state.list.find((item) => item.id === id);
  },
};
