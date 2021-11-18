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
};
