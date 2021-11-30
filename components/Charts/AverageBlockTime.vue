<template>
  <highchart :options="chartOptions" style="width: 100%" />
</template>

<script>
export default {
  name: 'ChartsDailyTransactions',

  props: {
    sourceTotalTx: {
      type: Array,
      default: () => [],
    },
  },

  created() {
    console.log('this.sourceTotalTx :>> ', this.sourceTotalTx);
  },

  computed: {
    chartOptions() {
      const ctx = this;

      return {
        chart: {
          type: 'column',
          width: 2500,
          zoomType: 'x',
          style: {
            fontFamily: 'Airbnb Cereal App',
            fontSize: '14px',
            fontWeight: '500',
          },
        },

        title: {
          text: '',
        },

        xAxis: {
          type: 'datetime',
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true,
        },

        yAxis: {
          title: {
            text: '',
          },
        },

        legend: {
          enabled: true,
        },

        plotOptions: {
          column: {},
        },

        series: [
          {
            data: ctx.sourceTotalTx,
            color: '#2C3ACF',
            fillColor: 'rgba(233, 235, 250, 0.7)',
            dataGrouping: {
              enabled: true,
            },
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
