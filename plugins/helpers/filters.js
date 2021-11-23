import Vue from 'vue';
import dayjs from 'dayjs';

Vue.filter('formatTimeDuration', (timestamp) => {
  return dayjs(parseInt(timestamp) * 1000)
    .utc(true)
    .fromNow();
});

Vue.filter('formatTimeUTC', (timestamp) => {
  return dayjs(parseInt(timestamp) * 1000)
    .utc(true)
    .format('MMMM DD, YYYY hh:mm:ss A +UTC');
});

Vue.filter('formatPrice', (number) => {
  if (number) {
    return parseFloat(number)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  return '';
});
