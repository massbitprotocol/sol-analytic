<template>
  <div class="pb-5">
    <div class="text-4xl font-bold mb-5">
      Blocks
    </div>

    <BaseTable :columns="columns" :data-source="dataSource">
      <template #block_slot="{record,item}">
        <NuxtLink class="text-sm text-blue-500" :to="{ name: 'blocks-id', params: { id: record.block_slot } }">
          #{{ item }}
        </NuxtLink>
      </template>

      <template #leader="{item}">
        <NuxtLink class="text-sm text-blue-500" :to="{ name: '' }">
          {{ item }}
        </NuxtLink>
      </template>

      <template #block-hash="{record,item}">
        <NuxtLink class="text-sm text-blue-500" :to="{ name: 'blocks-id', params: { id: record.block_slot } }">
          {{ item }}
        </NuxtLink>
      </template>

      <template #timestamp="{item}">
        {{ item | formatTimeDuration }}
      </template>
    </BaseTable>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Block Hash',
    dataIndex: 'block_hash',
    slotScope: 'block-hash',
    width: '250px',
    class: 'text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: 'Slot',
    dataIndex: 'block_slot',
    slotScope: 'block_slot',
    width: '120px',
  },
  {
    title: 'Time',
    dataIndex: 'timestamp',
    slotScope: 'timestamp',
    width: '180px',
    class: 'whitespace-nowrap',
  },
  {
    title: 'Tx Count',
    dataIndex: 'transaction_number',
    width: '160px',
  },
  {
    title: 'Leader',
    dataIndex: 'leader',
    slotScope: 'leader',
    width: '250px',
    class: 'text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: 'Reward',
    dataIndex: 'reward',
    width: '150px',
  },
];
export default {
  name: 'Index',

  async asyncData({ $axios }) {
    const data = await $axios.$post('', {
      jsonrpc: '2.0',
      method: 'block_list',
      params: [10],
      id: 1,
    });
    if (data.result) {
      return { dataSource: data.result };
    }

    return { dataSource: [] };
  },

  data() {
    return {
      columns,
    };
  },
};
</script>
