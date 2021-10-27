export const utils = {
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },
};

export default function(ctx, inject) {
  ctx.$utils = utils;
  inject('utils', utils);
}
