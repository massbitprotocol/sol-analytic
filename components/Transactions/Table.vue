<template>
  <div>
    <BaseTable :columns="columns" :data-source="dataSource" :loading="loading">
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

      <!-- signature -->
      <template #signature="{ item, record }">
        <div class="inline-grid" v-tooltip.bottom-start="{ content: `${item}`, class: 'hide-arrow text-xs' }">
          <svg
            v-if="!record[6] || !parseInt(record[6])"
            class="absolute left-0"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM9 8.9996C9 9.55188 9.44772 9.9996 10 9.9996C10.5523 9.9996 11 9.55188 11 8.9996V6.9996C11 6.44732 10.5523 5.9996 10 5.9996C9.44772 5.9996 9 6.44732 9 6.9996V8.9996ZM9 12.9996C9 13.5519 9.44772 13.9996 10 13.9996C10.5523 13.9996 11 13.5519 11 12.9996C11 12.4473 10.5523 11.9996 10 11.9996C9.44772 11.9996 9 12.4473 9 12.9996Z"
              fill="#EB5757"
            />
          </svg>

          <NuxtLink
            class="text-body-1 font-medium text-primary overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
            :to="{ name: 'transactions-id', params: { id: item } }"
          >
            {{ item }}
          </NuxtLink>
        </div>
      </template>

      <!-- instructions -->
      <template #instructions="{ item, record }">
        <template v-if="Array.isArray(item) && item.length > 0">
          <div
            v-if="item.length === 1"
            class="
              inline-grid
              text-body-1
              font-medium
              text-primary
              overflow-ellipsis
              whitespace-nowrap
              break-words
              overflow-hidden
            "
          >
            <a
              href="#"
              class="
                text-body-1
                font-medium
                text-primary
                overflow-ellipsis
                whitespace-nowrap
                break-words
                overflow-hidden
              "
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
                font-medium
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
                class="
                  text-body-1
                  font-medium
                  text-primary
                  overflow-ellipsis
                  whitespace-nowrap
                  break-words
                  overflow-hidden
                "
                href=""
              >
                {{ instruction }}
              </a>
            </template>
          </div>
        </template>
      </template>
    </BaseTable>

    <BaseButton
      class="h-[52px] flex items-center justify-center mt-7.5 mx-auto px-15"
      :loading="loadingButtonLoadmore"
      @click="loadMoreTransactions"
    >
      <span class="text-neutral-white text-body-1 font-normal"> Load more </span>
    </BaseButton>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';

const columns = [
  {
    title: 'Signature (transaction)',
    dataIndex: 2,
    slotScope: 'signature',
    width: '250px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Slot',
    dataIndex: 0,
    slotScope: 'block_slot',
    width: '80px',
    class: 'text-body-1 text-neutral-darker font-medium',
  },
  {
    title: 'Time (UTC)',
    dataIndex: 1,
    slotScope: 'timestamp',
    width: '100px',
    class: 'text-body-1 text-neutral-darker font-medium whitespace-nowrap',
  },
  {
    title: 'Intructions',
    dataIndex: 4,
    slotScope: 'instructions',
    width: '250px',
    class: 'text-body-1 text-neutral-darker',
  },
  {
    title: 'Reward (SOL)',
    dataIndex: 5,
    slotScope: 'reward',
    width: '100px',
    class: 'text-body-1 text-neutral-darker font-medium',
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
    '0',
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
  name: 'TransactionsTable',

  data() {
    return {
      columns,
      dataSource,
      loading: false,
      loadingButtonLoadmore: false,
      cacheShowAllInstuction: new Map(),
    };
  },

  methods: {
    showAllInstruction(record) {
      const cacheShowAllInstuction = cloneDeep(this.cacheShowAllInstuction);
      const signature = record[2];
      const showAllInstuction = !cacheShowAllInstuction.get(signature);
      cacheShowAllInstuction.set(signature, showAllInstuction);
      this.cacheShowAllInstuction = cacheShowAllInstuction;
    },

    loadMoreTransactions() {
      // LoadMoreTransactions
    },
  },
};
</script>
