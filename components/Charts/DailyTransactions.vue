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

  computed: {
    chartOptions() {
      const ctx = this;

      return {
        chart: {
          type: 'areaspline',
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
          allowDecimals: false,
        },

        yAxis: {
          title: {
            text: '',
          },
        },

        legend: {
          enabled: false,
        },

        plotOptions: {
          areaspline: {
            color: '#2C3ACF',
            fillColor: 'rgba(233, 235, 250, 0.7)',
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },

        series: [
          {
            data: ctx.sourceTotalTx,
            lineWidth: 2,
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
