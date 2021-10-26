<template>
  <div>
    <BaseTable :columns="columns" :data-source="dataSource">
      <template #address="{item}">
        <NuxtLink class="text-base text-blue-500" :to="{ name: '' }"> {{ item }} </NuxtLink>
      </template>

      <template #change="{record}">
        <div class="inline-flex items-center justify-center">
          {{ calculateChange(record) }}
          <svg
            v-if="calculateChange(record) < 0"
            class="ml-1 text-red-600"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="arrow-down"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0048.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"
            ></path>
          </svg>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Address',
    dataIndex: 'address',
    slotScope: 'address',
    width: '250px',
    class: 'text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: 'Balance Before (SOL)',
    dataIndex: 'balance_before',
    width: '180px',
  },
  {
    title: 'Balance After (SOL)',
    dataIndex: 'balance_after',
    width: '180px',
  },
  {
    title: 'Change (SOL)',
    dataIndex: 'change',
    slotScope: 'change',
    width: '160px',
  },
];
const dataSource = [
  {
    address: '6iFeRNg5zRrTJCK3WZ6ttu7iKJ84Q1VSSrQsoFkBaYjC',
    balance_before: 2.343965,
    balance_after: 2.34396,
  },
  {
    address: '14ivtgssEBoBjuZJtSAPKYgpUK7DmnSwuPMqJoVTSgKJ',
    balance_before: 0.45710496,
    balance_after: 0.45710496,
  },
  {
    address: 'CEQdAFKdycHugujQg9k2wbmxjcpdYZyVLfV9WerTnafJ',
    balance_before: 0.45710496,
    balance_after: 0.45710496,
  },
];
export default {
  name: 'TransactionSolBalanceChange',

  data() {
    return {
      columns,
      dataSource,
    };
  },

  methods: {
    calculateChange(record) {
      let change = record.balance_after - record.balance_before;
      return change.toPrecision(1);
    },
  },
};
</script>
