export default {
  async fetch({ commit }) {
    const { tokens } = await this.$axios.$get(
      'https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json',
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
