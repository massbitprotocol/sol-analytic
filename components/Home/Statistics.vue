<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-3 lg:gap-5">
    <!-- Price -->
    <div class="p-6 rounded-xl bg-statistic-price-pattern bg-neutral-darkest bg-no-repeat bg-right">
      <div class="text-body-1 text-primary-background">Price</div>

      <div class="flex items-center gap-4 mt-1.5 text-neutral-white">
        <div class="text-title-2 font-bold">$240.44</div>

        <div
          class="flex items-center justify-center gap-1 px-3 py-1 rounded-full text-neutral-white"
          style="background: rgba(0, 177, 89, 0.3)"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.5 5.83333C17.5079 5.77527 17.5079 5.7164 17.5 5.65833C17.4927 5.60941 17.4787 5.56173 17.4583 5.51667C17.4363 5.47594 17.4112 5.43694 17.3833 5.4C17.3516 5.34729 17.3123 5.29956 17.2667 5.25833L17.1667 5.2C17.1186 5.16413 17.0651 5.13601 17.0083 5.11667H16.8417C16.7909 5.0675 16.7316 5.02796 16.6667 5H12.5C12.279 5 12.067 5.0878 11.9107 5.24408C11.7545 5.40036 11.6667 5.61232 11.6667 5.83333C11.6667 6.05435 11.7545 6.26631 11.9107 6.42259C12.067 6.57887 12.279 6.66667 12.5 6.66667H14.8583L11.525 10.5917L7.925 8.45C7.75449 8.34858 7.55338 8.31133 7.35786 8.34493C7.16233 8.37854 6.9852 8.4808 6.85834 8.63333L2.69167 13.6333C2.6215 13.7175 2.56863 13.8148 2.5361 13.9194C2.50356 14.0241 2.49199 14.1342 2.50205 14.2433C2.51212 14.3525 2.54361 14.4585 2.59474 14.5555C2.64587 14.6525 2.71562 14.7384 2.8 14.8083C2.94993 14.9326 3.13863 15.0004 3.33334 15C3.45576 15.0002 3.57673 14.9734 3.68763 14.9216C3.79853 14.8697 3.89665 14.7941 3.975 14.7L7.68334 10.25L11.2417 12.3833C11.4104 12.4834 11.6091 12.5208 11.8027 12.4888C11.9963 12.4567 12.1724 12.3574 12.3 12.2083L15.8333 8.08333V10C15.8333 10.221 15.9211 10.433 16.0774 10.5893C16.2337 10.7455 16.4457 10.8333 16.6667 10.8333C16.8877 10.8333 17.0996 10.7455 17.2559 10.5893C17.4122 10.433 17.5 10.221 17.5 10V5.83333Z"
              fill="#00B159"
            />
          </svg>

          <div class="text-body-2 text-accent-green">8.41%</div>
        </div>
      </div>

      <div class="flex items-center gap-5 mt-2 text-body-2 text-primary-background">
        <div>24h Vol: $5.2B</div>

        <div>MCap: $72.4B</div>
      </div>
    </div>

    <!-- Active Stake -->
    <div class="p-6 rounded-xl bg-statistic-stake-pattern bg-accent-green bg-no-repeat bg-right">
      <div class="text-body-1 text-primary-background">Active Stake</div>

      <div class="flex items-center gap-4 mt-1.5 text-neutral-white">
        <div class="text-heading-2"><span class="text-title-2 font-bold">397.2M /</span> 508.2M</div>
      </div>

      <div class="flex items-center gap-5 mt-2 text-body-2 text-primary-background">
        <div>Delinquent stake: 0.4%</div>
      </div>
    </div>

    <!-- Transaction Count -->
    <div class="p-6 rounded-xl bg-statistic-transaction-pattern bg-accent-yellow bg-no-repeat bg-right">
      <div class="text-body-1 text-primary-background">Transaction Count</div>

      <div class="flex items-center gap-4 mt-1.5 text-neutral-white">
        <div class="text-title-2 font-bold">37,217,917,398</div>
      </div>

      <div class="flex items-center gap-5 mt-2 text-body-2 text-primary-background">
        <div>Transactions per Second</div>
      </div>
    </div>

    <!-- Circulating Supply -->
    <div class="p-6 rounded-xl bg-statistic-supply-pattern bg-accent-red bg-no-repeat bg-right">
      <div class="text-body-1 text-primary-background">Circulating Supply</div>

      <div class="flex items-center gap-4 mt-1.5 text-neutral-white">
        <div class="text-heading-2"><span class="text-title-2 font-bold">301.1M /</span> 508.2M</div>
      </div>

      <div class="flex items-center gap-5 mt-2 text-body-2 text-primary-background">
        <div>59.2% is circulating</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeStatistics',
};
</script>
