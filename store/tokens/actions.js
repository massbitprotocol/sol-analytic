export default {
  async fetch({ commit }) {
    const { tokens } = await this.$axios.$get(
      'https://cdn.jsdelivr.net/gh/solana-labs/token-list@main/src/tokens/solana.tokenlist.json',
      {},
      { progress: false },
    );
    if (tokens) {
      commit('setList', tokens);

      return tokens;
    }

    commit('setList', []);

    return [];
  },

  async fetchCurrent({ commit }, address) {
    let token = { account: address };

    const clientGetAccount = await this.$axios
      .$get('https://api.solscan.io/account', { params: { address } }, { progress: false })
      .catch((error) => {
        return error;
      });
    const clientMeta = await this.$axios
      .$get('https://api.solscan.io/token/meta', { params: { token: address } }, { progress: false })
      .catch((error) => {
        return error;
      });

    const _token = await Promise.all([clientGetAccount, clientMeta]).then(([resAccount, resMeta]) => {
      let _data = {};

      if (resAccount && resAccount.data) {
        _data = Object.assign(_data, resAccount.data);
      }
      if (resMeta && resMeta.data) {
        _data = Object.assign(_data, resMeta.data);
      }

      return _data;
    });
    token = Object.assign(token, _token);

    commit('setCurrent', token);

    return token;
  },

  async getUsdtPrice({ commit }, { symbol }) {
    const { price } = await this.$axios.$get(
      'https://api.binance.com/api/v3/ticker/price',
      { params: { symbol } },
      { progress: false },
    );

    if (price) {
      const _price = parseFloat(price);

      commit('setPrice', _price);

      return _price;
    }

    return false;
  },
};
