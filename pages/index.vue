<template>
  <div>
    <Portal to="banner" tag="div">
      <div class="bg-banner-pattern h-[268px] flex items-center justify-center">
        <div class="container mx-auto">
          <div class="text-medium-title text-neutral-white font-bold">Dashboard</div>

          <div class="mt-2 text-heading-2 text-neutral-white">Explore Solana Blockchain</div>

          <TheSearch class="mt-5 w-full lg:w-2/4" />
        </div>
      </div>
    </Portal>

    <div class="pb-10">
      <HomeStatistics />

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 lg:gap-5 mt-15">
        <div>
          <div class="text-heading-2 text-neutral-darkest font-bold uppercase">Latest Blocks</div>

          <HomeLatestBlocks class="mt-4" />
        </div>

        <div>
          <div class="text-heading-2 text-neutral-darkest font-bold uppercase">Latest Transactions</div>

          <HomeLatestTransactions class="mt-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
