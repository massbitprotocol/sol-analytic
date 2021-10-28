<template>
  <div class="pb-5">
    <div class="flex items-center justify-between mb-5">
      <div class="flex items-center text-3xl font-bold ">
        <BackButton class="mr-2 " />

        Transaction Details
      </div>

      <BlockSearch />
    </div>

    <BaseTabs v-if="transaction" :headers="tabHeaders" :current-tab.sync="current_tab">
      <template #overview>
        <TransactionOverview :transaction="transaction" />
      </template>

      <template #sol_balance_change>
        <TransactionSolBalanceChange :transaction="transaction" />
      </template>

      <template #token_balance_change>
        <TransactionTokenBalanceChange :transaction="transaction" />
      </template>
    </BaseTabs>
  </div>
</template>

<script>
const tabHeaders = [
  {
    name: 'Overview',
    key: 'overview',
  },
  {
    name: 'SOL Balance Change',
    key: 'sol_balance_change',
  },
  {
    name: 'Token Balance Change',
    key: 'token_balance_change',
  },
];
export default {
  name: 'Detail',

  async asyncData({ $axios, params }) {
    const data = await $axios.$post('', {
      jsonrpc: '2.0',
      method: 'getTransactionDetail',
      params: [params.id],
      id: 1,
    });
    if (data.result) {
      return { transaction: data.result };
    }

    return { transaction: null };
  },

  data() {
    return {
      tabHeaders,
      current_tab: 'overview',
    };
  },
};
</script>
