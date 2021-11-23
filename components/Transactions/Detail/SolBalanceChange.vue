<template>
  <div>
    <div class="uppercase font-bold text-heading-2 text-neutral-darkest">Sol Balance Change</div>

    <BaseTable class="mt-4" :columns="columns" :data-source="dataSource" :loading="loading">
      <template #address="{ item }">
        {{ item }}
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
    class:
      'text-body-1 font-medium text-neutral-darker overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: 'Balance Before (SOL)',
    dataIndex: 'balance_before',
    width: '180px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
  {
    title: 'Balance after (SOL)',
    dataIndex: 'balance_after',
    width: '180px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
  {
    title: 'Change (SOL)',
    dataIndex: 'change',
    width: '180px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
];
const dataSource = [
  {
    address: 'Y2akr3bXHRsqyP1QJtbm9G9N88ZV4t1KfaFeDzKRTfr',
    balance_before: 157.39487,
    balance_after: 157.394865,
    change: -0.000005,
  },
  {
    address: '3pyn4svBbxJ9Wnn3RVeafyLWfzie6yC5eTig2S62v9SC',
    balance_before: 0.0239424,
    balance_after: 0.0239424,
    change: 0,
  },
  {
    address: 'SysvarC1ock11111111111111111111111111111111',
    balance_before: 0.000000001,
    balance_after: 0.000000001,
    change: 0,
  },
  {
    address: 'FsJ3A3u2vn5cTVofAjvy6y5kwABJAqYWpe4975bi2epH',
    balance_before: 0.00114144,
    balance_after: 0.00114144,
    change: 0,
  },
];

export default {
  name: 'TransactionsDetailSolBalanceChange',

  props: {
    // transaction: {
    //   type: Object,
    //   default: () => ({}),
    // },

    loading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      columns,
      dataSource,
    };
  },
};
</script>
