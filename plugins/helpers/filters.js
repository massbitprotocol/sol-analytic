import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('formatTimeDuration', timestamp => {
  return dayjs(parseInt(timestamp) * 1000).fromNow();
});
