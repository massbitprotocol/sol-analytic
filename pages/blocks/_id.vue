<template>
  <div class="pb-5">
    <div class="w-full flex items-center justify-between">
      <div class="text-title-1 text-neutral-darkest font-bold">Block Details</div>

      <TheSearch class="w-4/12" />
    </div>

    <BlocksDetailOverview class="mt-7.5" :block="block" :loading="$fetchState.pending" />

    <BlocksTransactions v-if="block" class="mt-15" :block="block" />
  </div>
</template>

<script>
export default {
  name: 'Detail',

  data() {
    return {
      block: null,
    };
  },

  async fetch() {
    const data = await this.$axios.$post('', {
      jsonrpc: '2.0',
      method: 'getBlockDetail',
      params: [parseInt(this.id)],
      id: 1,
    });

    if (data.result) {
      await this.$store.dispatch('tokens/getUsdtPrice', { symbol: 'SOLUSDT' });

      this.block = data.result;
    }
  },

  computed: {
    id() {
      return this.$route.params.id || 0;
    },
  },
};
</script>
