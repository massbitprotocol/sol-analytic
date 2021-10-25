<template>
  <div class="w-full px-4 md:px-6 leading-normal">
    index
  </div>
</template>

<script>
export default {
  asyncData({ $auth, redirect }) {
    redirect('/blocks');
  },
};
</script>
