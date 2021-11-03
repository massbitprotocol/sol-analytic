<template>
  <div class="mb-5">
    <div class="text-xl text-gray-900 font-bold mb-2">
      Daily average reward and fee
    </div>
    <highchart :options="chartOptions" :modules="['exporting']" style="width:100%;" />
  </div>
</template>

<script>
export default {
  name: 'ChartAverageRewardAndFee',

  props: {
    sourceFee: {
      type: Array,
      default: () => [],
    },

    sourceReward: {
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
            name: 'Averate Fee',
            data: ctx.sourceFee,
          },

          {
            name: 'Average Reward',
            data: ctx.sourceReward,
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
