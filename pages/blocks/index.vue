<template>
  <div class="pb-5">
    <div class="text-3xl font-bold mb-5">
      Blocks
    </div>

    <BaseTable :columns="columns" :data-source="dataSource">
      <template #block_slot="{record,item}">
        <NuxtLink class="text-base text-blue-500" :to="{ name: 'blocks-id', params: { id: record.block_slot } }">
          #{{ item }}
        </NuxtLink>
      </template>

      <template #leader="{item}">
        <span class="cursor-pointer absolute left-0 mt-[2px]" v-copy="item">
          <svg
            class="text-base"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M5 13H3C2.46957 13 1.96086 12.7893 1.58579 12.4142C1.21071 12.0391 1 11.5304 1 11V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H11C11.5304 1 12.0391 1.21071 12.4142 1.58579C12.7893 1.96086 13 2.46957 13 3V5"
              stroke="#8B8B8B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 17H7C6.46957 17 5.96086 16.7893 5.58579 16.4142C5.21071 16.0391 5 15.5304 5 15V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5H15C15.5304 5 16.0391 5.21071 16.4142 5.58579C16.7893 5.96086 17 6.46957 17 7V11"
              stroke="#8B8B8B"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <rect x="5" y="5" width="12" height="12" rx="2" stroke="#8B8B8B" stroke-width="1.5" />
          </svg>
        </span>

        <NuxtLink
          class="text-base text-blue-500"
          :to="{ name: '' }"
          v-tooltip.bottom-start="{ content: `${item}`, class: 'hide-arrow text-xs' }"
        >
          {{ item }}
        </NuxtLink>
      </template>

      <template #block-hash="{record,item}">
        <NuxtLink
          class="text-base text-blue-500"
          :to="{ name: 'blocks-id', params: { id: record.block_slot } }"
          v-tooltip.bottom-start="{ content: `${item}`, class: 'hide-arrow text-xs' }"
          v-copy="item"
        >
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
