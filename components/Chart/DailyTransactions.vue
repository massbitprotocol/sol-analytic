<template>
  <div class="mb-5">
    <div class="text-xl text-gray-900 font-bold mb-2">
      Daily Transactions Chart
    </div>
    <highchart :options="chartOptions" :modules="['exporting']" style="width:100%;" />
  </div>
</template>

<script>
export default {
  name: 'ChartDailyTransactions',

  props: {
    source: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    chartOptions() {
      const ctx = this;
      return {
        title: {
          text: '',
        },
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
            name: 'Total transaction',
            data: ctx.source,
          },
        ],
        credits: {
          enabled: false,
        },
      };
    },
  },
};
</script>
