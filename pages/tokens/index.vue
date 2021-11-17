<template>
  <div>tokens</div>
</template>

<script>
// import { cloneDeep } from 'lodash';

export default {
  name: 'Index',

  async fetch() {
    const data = await this.$axios.$get(
      'https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json',
      {},
    );
    if (data.tokens) {
      this.tokens = data.tokens;
    }
  },

  data() {
    return {
      tokens: [],
    };
  },
};
</script>
