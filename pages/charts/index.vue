<template>
  <div class="py-5">
    <ChartDailyTransactionNumber
      class="mb-10"
      :sourceTotalTx="sourceChartTransactions"
      :sourceSuccessTx="sourceChartSuccessTransaction"
    />

    <ChartAverageRewardAndFee
      class="mb-10"
      :sourceFee="sourceChartAverateFee"
      :sourceReward="sourceChartAverateReward"
    />
  </div>
</template>

<script>
export default {
  name: 'Index',

  async asyncData({ $axios }) {
    const data = await $axios.$post('', {
      jsonrpc: '2.0',
      method: 'getBlockStatistic',
      params: [0, 100],
      id: 1,
    });
    if (data.result) {
      return { dataSource: data.result };
    }

    return { dataSource: [] };
  },

  computed: {
    sourceChartTransactions() {
      return this.dataSource.map(item => {
        console.log('item :>> ', item);
        return [parseInt(item.date) * 1000, item.total_tx];
      });
    },

    sourceChartAverateFee() {
      return this.dataSource.map(item => {
        return [parseInt(item.date) * 1000, parseInt(item.total_fee / item.block_counter)];
      });
    },

    sourceChartAverateReward() {
      return this.dataSource.map(item => {
        return [parseInt(item.date) * 1000, parseInt(item.total_reward / item.block_counter)];
      });
    },

    sourceChartSuccessTransaction() {
      return this.dataSource.map(item => {
        return [parseInt(item.date) * 1000, item.success_tx];
      });
    },
  },
};
</script>
