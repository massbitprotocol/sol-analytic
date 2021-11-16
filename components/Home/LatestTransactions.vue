<template>
  <div class="mt-4">
    <!-- Header -->
    <div class="w-full sticky top-0 z-10 pr-4">
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
    <div class="relative overflow-auto max-h-[500px]">
      <BaseTable class="table-latest-blocks" :columns="columns" :data-source="source" :showHeader="false" />
    </div>

    <div class="w-full px-4 py-2 border border-primary-background rounded-b-lg">
      <BaseSecondaryButton class="w-full"> View All Blocks </BaseSecondaryButton>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Slot',
    dataIndex: 'slot',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Time (UTC)',
    dataIndex: 'timestamp',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Intructions',
    dataIndex: 'intructions',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Reward (SOL)',
    dataIndex: 'reward',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
];
const source = [
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
  {
    slot: '#104810031',
    timestamp: '1 minute ago',
    intructions: 'Sol-Transfer',
    reward: '0.002575',
  },
];

export default {
  name: 'HomeLatestTransactions',

  data() {
    return {
      columns,
      source,
    };
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
