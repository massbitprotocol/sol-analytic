<template>
  <highchart :options="chartOptions" :modules="['exporting']" style="width: 100%" />
</template>

<script>
export default {
  name: 'ChartsDailyTransactions',

  props: {
    sourceTotalTx: {
      type: Array,
      default: () => [],
    },

    sourceSuccessTx: {
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
            text: '',
          },
        },

        series: [
          {
            name: 'Total Transaction',
            data: ctx.sourceTotalTx,
          },

          {
            name: 'Success Transaction',
            data: ctx.sourceSuccessTx,
            color: '#66BB6A',
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
