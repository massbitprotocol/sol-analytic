<template>
  <div class="pb-5">
    <div class="w-full flex items-center justify-between">
      <div class="text-title-1 text-neutral-darkest font-bold">Tokens</div>

      <TheSearch class="w-4/12" />
    </div>

    <TokensTable class="mt-7.5" />
  </div>
</template>

<script>
export default {
  name: 'Index',
};
</script>
