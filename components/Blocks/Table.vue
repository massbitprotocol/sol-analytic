<template>
  <div>
    <BaseTable :columns="columns" :data-source="dataSource" :loading="loading">
      <!-- block_hash -->
      <template #block_hash="{ record, item }">
        <NuxtLink class="text-body-1 text-primary" :to="{ name: 'blocks-id', params: { id: record.block_slot } }">
          {{ item }}
        </NuxtLink>
      </template>

      <!-- block_slot -->
      <template #block_slot="{ record, item }">
        <NuxtLink class="text-body-1 text-primary" :to="{ name: 'blocks-id', params: { id: record.block_slot } }">
          #{{ item }}
        </NuxtLink>
      </template>

      <!-- timestamp -->
      <template #timestamp="{ item }">
        {{ item | formatTimeDuration }}
      </template>

      <!-- leader -->
      <template #leader="{ item }">
        {{ item }}
      </template>

      <!-- reward -->
      <template #reward="{ item }">
        {{ item / 1000000000 }}
      </template>
    </BaseTable>

    <BaseButton
      class="h-[52px] flex items-center justify-center mt-7.5 mx-auto px-15"
      :loading="loadingButtonLoadmore"
      @click="loadMoreBlocks"
    >
      <span class="text-neutral-white text-body-1 font-normal"> Load more </span>
    </BaseButton>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Block Hash',
    dataIndex: 'block_hash',
    slotScope: 'block_hash',
    width: '250px',
    class: 'overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: 'Slot',
    dataIndex: 'block_slot',
    slotScope: 'block_slot',
    width: '120px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Time (UTC)',
    dataIndex: 'timestamp',
    slotScope: 'timestamp',
    width: '120px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Tx Count',
    dataIndex: 'transaction_number',
    width: '100px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Leader',
    dataIndex: 'leader',
    slotScope: 'leader',
    width: '250px',
    class: 'text-body-1 text-neutral-darker overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: 'Reward (SOL)',
    dataIndex: 'reward',
    slotScope: 'reward',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
];

export default {
  name: 'BlocksTable',

  data() {
    return {
      columns,
      dataSource: [],
      polling: null,

      offset: 0,
      limit: 20,

      loading: false,
      loadingButtonLoadmore: false,
    };
  },

  async created() {
    this.loading = true;

    await this.getBlocks(false);

    this.loading = false;
  },

  beforeDestroy() {
    if (this.polling) {
      clearInterval(this.polling);
    }
  },

  methods: {
    async getBlocks(loading = true) {
      const data = await this.$axios.$post(
        '',
        {
          jsonrpc: '2.0',
          method: 'getBlockList',
          params: [this.offset, this.limit],
          id: 1,
        },
        { progress: loading },
      );
      if (data.result) {
        const _result = data.result;

        if (this.offset === 0) {
          this.dataSource = _result;
        } else {
          this.dataSource.push(..._result);
        }

        this.offset += this.limit;
      } else {
        this.dataSource = [];
      }
    },

    async loadMoreBlocks() {
      this.loadingButtonLoadmore = true;

      await this.getBlocks(false);

      this.loadingButtonLoadmore = false;
    },
  },
};
</script>
