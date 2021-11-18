<template>
  <div class="mt-4">
    <!-- Header -->
    <div class="w-full sticky top-0 z-10">
      <table class="w-full">
        <colgroup>
          <template v-for="(column, index) in columns">
            <col v-if="column.width" :key="index" span="1" :width="column.width" />
            <col v-else :key="index" />
          </template>
        </colgroup>

        <thead>
          <tr>
            <th
              v-for="(column, index) in columns"
              :key="index"
              class="bg-primary first:rounded-tl-lg last:rounded-tr-lg px-5 py-4"
            >
              <div class="flex items-center justify-between">
                <span class="text-left text-xs font-medium text-white uppercase">
                  {{ column.title }}
                </span>
              </div>
            </th>
          </tr>
        </thead>
      </table>
    </div>

    <!-- Table -->
    <div class="relative overflow-auto h-[500px]">
      <BaseTable
        class="table-latest-blocks h-full"
        :columns="columns"
        :data-source="dataSource"
        :show-header="false"
        :loading="loading"
      >
        <!-- block_slot -->
        <template #block_slot="{ record, item }">
          <NuxtLink
            class="text-body-1 font-medium text-primary"
            :to="{ name: 'blocks-id', params: { id: record.block_slot } }"
          >
            #{{ item }}
          </NuxtLink>
        </template>

        <!-- timestamp -->
        <template #timestamp="{ item }">
          {{ item | formatTimeDuration }}
        </template>

        <!-- reward -->
        <template #reward="{ item }">
          {{ item / 1000000000 }}
        </template>
      </BaseTable>
    </div>

    <div class="w-full px-4 py-2 border border-primary-background rounded-b-lg">
      <BaseSecondaryButton class="w-full" @click="$router.push({ name: 'blocks' })">
        View All Blocks
      </BaseSecondaryButton>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Slot',
    dataIndex: 'block_slot',
    slotScope: 'block_slot',
    width: '180px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
  {
    title: 'Time (UTC)',
    dataIndex: 'timestamp',
    slotScope: 'timestamp',
    width: '180px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
  {
    title: 'Tx Count',
    dataIndex: 'transaction_number',
    width: '180px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
  {
    title: 'Reward (SOL)',
    dataIndex: 'reward',
    slotScope: 'reward',
    width: '180px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
];

export default {
  name: 'HomeLatestBlocks',

  data() {
    return {
      columns,
      dataSource: [],
      polling: null,
      loading: false,
    };
  },

  beforeDestroy() {
    if (this.polling) {
      clearInterval(this.polling);
    }
  },

  async created() {
    this.loading = true;

    await this.getBlocks(false);

    this.loading = false;

    this.startPolling();
  },

  methods: {
    async getBlocks(loading = true) {
      const data = await this.$axios.$post(
        '',
        {
          jsonrpc: '2.0',
          method: 'getBlockList',
          params: [0, 10],
          id: 1,
        },
        { progress: loading },
      );
      if (data.result) {
        this.dataSource = data.result;
      } else {
        this.dataSource = [];
      }
    },

    startPolling() {
      this.polling = setInterval(() => {
        this.getBlocks(false);
      }, 10 * 1000);
    },
  },
};
</script>

<style>
.table-latest-blocks tr:last-child td {
  border-bottom: 0 !important;
}
.table-latest-blocks tr:last-child td:first-child {
  border-bottom-left-radius: 0 !important;
}
.table-latest-blocks tr:last-child td:last-child {
  border-bottom-right-radius: 0 !important;
}
</style>
