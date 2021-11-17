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
          <NuxtLink class="text-body-1 text-primary" :to="{ name: 'blocks-id', params: { id: record.block_slot } }">
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

        <!-- instructions -->
        <template #instructions="{ item, record }">
          <template v-if="Array.isArray(item) && item.length > 0">
            <div
              v-if="item.length === 1"
              class="
                inline-grid
                text-body-1 text-primary
                overflow-ellipsis
                whitespace-nowrap
                break-words
                overflow-hidden
              "
            >
              <a
                href="#"
                class="text-body-1 text-primary overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
              >
                {{ item[0] }}
              </a>
            </div>
            <div v-else class="inline-grid grid-cols-1 gap-2">
              <div
                class="
                  flex
                  items-center
                  gap-1
                  text-body-1
                  overflow-ellipsis
                  whitespace-nowrap
                  break-words
                  overflow-hidden
                "
              >
                <a class="text-primary overflow-ellipsis whitespace-nowrap break-words overflow-hidden" href="">
                  {{ item[0] }}
                </a>
                <div
                  class="
                    text-caption text-neutral-normal/90
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    absolute
                    right-0
                    px-1
                    bg-white
                    border border-primary-background
                    rounded-full
                  "
                  @click="showAllInstruction(record)"
                >
                  +{{ item.length - 1 }}
                </div>
              </div>

              <template v-for="(instruction, index) in item">
                <a
                  v-if="cacheShowAllInstuction.get(record[2]) && index > 0"
                  :key="index"
                  class="text-body-1 text-primary overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                  href=""
                >
                  {{ instruction }}
                </a>
              </template>
            </div>
          </template>
        </template>
      </BaseTable>
    </div>

    <div class="w-full px-4 py-2 border border-primary-background rounded-b-lg">
      <BaseSecondaryButton class="w-full" @click="$router.push({ name: 'transactions' })">
        View All Transactions
      </BaseSecondaryButton>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';

const columns = [
  {
    title: 'Slot',
    dataIndex: 0,
    slotScope: 'block_slot',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Time (UTC)',
    dataIndex: 1,
    slotScope: 'timestamp',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Intructions',
    dataIndex: 4,
    slotScope: 'instructions',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Reward (SOL)',
    dataIndex: 5,
    slotScope: 'reward',
    width: '180px',
    class: 'text-body-1 text-neutral-darker',
  },
];
const dataSource = [
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
  [
    103372205,
    1635135679,
    '2PmKoqHHiWE6ts7HMoXaFqWZeumBuYp4aQfHh9kAiZmJue9ckwsLiDV14EfmpYxbpXuqVxstTQvgreExN43YseW4',
    'CuieVDEDtLo7FypA9SbLM9saXFdb1dsshEkyErMqkRQq',
    [
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
      '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    ],
    5000,
    '1',
  ],
];

export default {
  name: 'HomeLatestTransactions',

  data() {
    return {
      columns,
      dataSource,
      loading: false,
      cacheShowAllInstuction: new Map(),
    };
  },

  async created() {
    this.loading = true;

    await this.getTransactions(false);

    this.loading = false;
  },

  methods: {
    showAllInstruction(record) {
      const cacheShowAllInstuction = cloneDeep(this.cacheShowAllInstuction);
      const signature = record[2];
      const showAllInstuction = !cacheShowAllInstuction.get(signature);
      cacheShowAllInstuction.set(signature, showAllInstuction);
      this.cacheShowAllInstuction = cacheShowAllInstuction;
    },

    async getTransactions(loading = true) {
      const data = await this.$axios.$post(
        '',
        {
          jsonrpc: '2.0',
          method: 'getTransactionList',
          params: [0, 10],
          id: 1,
        },
        { progress: loading },
      );

      if (data.result && data.result.values) {
        this.dataSource = data.result.values;
      } else {
        this.dataSource = [];
      }
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
