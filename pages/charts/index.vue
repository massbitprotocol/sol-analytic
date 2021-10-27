<template>
  <div class="mt-5">
    <highchart :options="chartOptions" :modules="['exporting']" style="width:100%;" />
  </div>
</template>

<script>
export default {
  name: 'Index',

  async asyncData({ $axios }) {
    const data = await $axios.$post('', {
      jsonrpc: '2.0',
      method: 'block_statistic',
      params: [100],
      id: 1,
    });
    if (data.result) {
      return { dataSource: data.result };
    }

    return { dataSource: [] };
  },

  computed: {
    chartOptions() {
      const ctx = this;
      return {
        chart: {
          zoomType: 'x',
        },
        xAxis: {
          type: 'datetime',
        },
        yAxis: {
          title: {
            text: 'Transactions per day',
          },
        },

        legend: {
          enabled: false,
        },
        series: [
          {
            type: 'area',
            name: 'Total transaction',
            data: ctx.getChartData(),
          },
        ],
      };
    },
  },

  methods: {
    getChartData() {
      return this.dataSource.map(item => {
        console.log('item :>> ', item);
        return [parseInt(item.date) * 1000, item.total_tx, item.average_block_time, item.total_reward, item.total_fee];
      });
    },
  },
};
</script>
