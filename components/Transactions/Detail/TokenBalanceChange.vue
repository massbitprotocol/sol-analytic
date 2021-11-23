<template>
  <div>
    <div class="uppercase font-bold text-heading-2 text-neutral-darkest">Token Balance Change</div>

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
  {
    title: 'Token',
    dataIndex: 'token',
    width: '180px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
];
const dataSource = [];

export default {
  name: 'TransactionsDetailTokenBalanceChange',

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
