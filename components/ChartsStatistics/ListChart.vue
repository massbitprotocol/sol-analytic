<template>
  <div>
    <div class="uppercase text-heading-2 text-neutral-darkest font-bold mt-7.5">Blockchain Data</div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7.5">
      <ChartsStatisticsDailyTransactions :loading="loading" :sourceTotalTx="sourceChartTransactions" />

      <ChartsStatisticsAddressesChart :loading="loading" :sourceTotalTx="sourceChartTransactions" />
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-7.5">
      <ChartsStatisticsAverageBlockTime :loading="loading" :sourceTotalTx="sourceChartTransactions" />

      <ChartsStatisticsNetworkUtilizationChart :loading="loading" :sourceTotalTx="sourceChartTransactions" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChartsStatisticsListChart',

  async fetch() {
    const data = await this.$axios.$post('', {
      jsonrpc: '2.0',
      method: 'getBlockStatistic',
      params: [0, 100],
      id: 1,
    });
    if (data.result) {
      this.dataSource = data.result;
    }
  },

  data() {
    return {
      dataSource: [],
    };
  },

  computed: {
    loading() {
      return this.$fetchState.pending;
    },

    sourceChartTransactions() {
      return this.dataSource.map((item) => {
        return [parseInt(item.date) * 1000, item.total_tx];
      });
    },

    // sourceChartSuccessTransaction() {
    //   return this.dataSource.map((item) => {
    //     return [parseInt(item.date) * 1000, item.success_tx];
    //   });
    // },

    // sourceChartAverateFee() {
    //   return this.dataSource.map((item) => {
    //     return [parseInt(item.date) * 1000, parseInt(item.total_fee / item.block_counter)];
    //   });
    // },

    // sourceChartAverateReward() {
    //   return this.dataSource.map((item) => {
    //     return [parseInt(item.date) * 1000, parseInt(item.total_reward / item.block_counter)];
    //   });
    // },
  },
};
</script>
