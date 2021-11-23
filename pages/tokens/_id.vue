<template>
  <div class="pb-5">
    <div v-if="token" class="w-full flex items-center justify-between">
      <div class="flex items-center">
        <img class="mr-3" :src="token.logoURI" width="52" height="52" loading="lazy" />

        <div class="text-title-1 text-neutral-darkest font-bold">{{ token.name }}</div>
      </div>

      <TheSearch class="w-4/12" />
    </div>

    <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-7.5">
      <TokensDetailMarketOverview :token="token" :loading="$fetchState.pending" />

      <TokensDetailProfileSummary :token="token" :loading="$fetchState.pending" />
    </div>

    <BaseTabs class="mt-7.5" classBody="bg-red-100 mt-0" :headers="tabHeaders" :current-tab.sync="current_tab">
      <template #transactions>
        <div class="w-full absolute left-0 bg-neutral-lightest">
          <div class="container mx-auto">
            <TokensDetailTransactions class="py-7.5" :loading="$fetchState.pending" />
          </div>
        </div>
      </template>

      <template #holders>
        <div class="w-full absolute left-0 bg-neutral-lightest">
          <div class="container mx-auto">
            <TokensDetailHolders class="py-7.5" :loading="$fetchState.pending" />
          </div>
        </div>
      </template>
    </BaseTabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const tabHeaders = [
  {
    name: 'Transactions',
    key: 'transactions',
  },
  {
    name: 'Holders',
    key: 'holders',
  },
];

export default {
  name: 'Detail',

  async fetch() {
    if (!this.tokens || this.tokens.length === 0) {
      await this.$store.dispatch('tokens/fetch');
    }

    await this.$store.dispatch('tokens/fetchCurrent', this.id);
  },

  created() {
    console.log('this.token :>> ', this.token);
  },

  data() {
    return {
      tabHeaders,
      current_tab: 'transactions',
    };
  },

  computed: {
    ...mapGetters({
      token: 'tokens/current',
    }),

    id() {
      return this.$route.params.id || null;
    },
  },
};
</script>
