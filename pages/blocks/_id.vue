<template>
  <div class="pb-5">
    <div class="flex justify-between mb-5">
      <div class="text-4xl font-bold ">
        Block Details
      </div>
      <!-- <input
        type="text"
        placeholder="Search"
        class="px-3 py-3 rounded focus:outline-none focus:ring focus:border-blue-300 "
      /> -->

      <BlockSearch />
    </div>

    <BaseBlock>
      <div class="text-xl font-bold text-gray-500">
        Overview
      </div>
      <table class="table-auto mt-5">
        <tbody>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Block
            </td>
            <td class="pr-6 py-3 text-gray-900">#103244130</td>
          </tr>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Timestamp
            </td>
            <td class="pr-6 py-3 text-gray-900">30 minutes ago</td>
          </tr>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Block Hash
            </td>
            <td class="pr-6 py-3 text-gray-900">
              AWQ9uBsMjATJTdcR5q5GXTJx4NdRhdBtxQb1h5uQBZEz
            </td>
          </tr>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Leader
            </td>
            <td class="pr-6 py-3">
              <a href="" class="text-blue-500">
                Staking Facilities
              </a>
            </td>
          </tr>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Reward
            </td>
            <td class="pr-6 py-3 text-gray-900">
              0.0036325 SOL ($0.7053)
            </td>
          </tr>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Transactions
            </td>
            <td class="pr-6 py-3 text-gray-900">
              Total 1448 transactions
            </td>
          </tr>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Previous Block Hash
            </td>
            <td class="pr-6 py-3 text-gray-900">
              FZmp5PPbVkXda87zdknkr3qEzrHwfbXthmmgVa86SYG9
            </td>
          </tr>
        </tbody>
      </table>
    </BaseBlock>

    <BaseBlock class="mt-5">
      <div class="text-xl font-bold text-gray-500">
        Transactions
      </div>

      <TransactionTable class="mt-5" :columns="columns" :data-source="transactions">
        <template #block="{item}">
          <NuxtLink class="text-sm text-blue-500" :to="{ name: '' }"> #{{ item }} </NuxtLink>
        </template>

        <template #by="{item}">
          <NuxtLink class="text-sm text-blue-500" :to="{ name: '' }">
            {{ item }}
          </NuxtLink>
        </template>

        <template #signature="{item,record}">
          <div class="inline-grid items-center">
            <svg
              v-if="!record[6] || !parseInt(record[6])"
              class="text-xs text-red-600 absolute left-1.5"
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="exclamation-circle"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
              ></path>
            </svg>
            <NuxtLink
              class="text-sm text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
              :to="{ name: 'transactions-id', params: { id: item } }"
            >
              {{ item }}
            </NuxtLink>
          </div>
        </template>

        <template #timestamp="{item}">
          <span class="text-sm text-gray-900">
            {{ item | formatTimeDuration }}
          </span>
        </template>

        <template #instructions="{item,record}">
          <template v-if="Array.isArray(item) && item.length > 0">
            <div
              class="inline-grid text-sm text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
              v-if="item.length === 1"
            >
              <a href="#" class="text-sm text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden">
                {{ item[0] }}
              </a>
            </div>
            <div v-else class="inline-grid grid-cols-1 gap-2">
              <div
                class="flex items-center gap-1 text-sm overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
              >
                <a class="text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden" href="">
                  {{ item[0] }}
                </a>
                <div
                  @click="showAllInstruction(record)"
                  class="flex items-center justify-center cursor-pointer absolute right-0 text-xs text-gray-500 px-1 bg-white border border-gray-300 rounded-2xl"
                >
                  +{{ item.length - 1 }}
                </div>
              </div>
              <template v-for="(instruction, index) in item">
                <a
                  v-if="cacheShowAllInstuction.get(record[2]) && index > 0"
                  :key="index"
                  href=""
                  class="text-sm text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                >
                  {{ instruction }}
                </a>
              </template>
            </div>
          </template>
        </template>
      </TransactionTable>

      <div class="flex items-center justify-center w-full py-5">
        <div @click="$fetch" class="flex items-center justify-center cursor-pointer">
          <svg
            v-if="loadingFetchTransactions"
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span class="text-md text-blue-500">
            Load more
          </span>
        </div>
      </div>
    </BaseBlock>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Signature',
    dataIndex: 'signature',
    slotScope: 'signature',
    width: '250px',
    class: 'text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
    key: 2,
  },
  {
    title: 'Block',
    dataIndex: 'block',
    slotScope: 'block',
    width: '120px',
    key: 0,
  },
  {
    title: 'Time',
    dataIndex: 'timestamp',
    slotScope: 'timestamp',
    width: '180px',
    class: 'whitespace-nowrap',
    key: 1,
  },
  {
    title: 'Instructions',
    dataIndex: 'instructions',
    slotScope: 'instructions',
    width: '120px',
    key: 4,
  },
  {
    title: 'By',
    dataIndex: 'by',
    slotScope: 'by',
    width: '250px',
    class: 'text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
    key: 3,
  },
  {
    title: 'Fee',
    dataIndex: 'fee',
    width: '150px',
    key: 5,
  },
];
export default {
  name: 'Detail',

  async asyncData({ $axios, params }) {
    const data = await $axios.$post('', {
      jsonrpc: '2.0',
      method: 'block_detail',
      params: [params.id],
      id: 1,
    });
    if (data.result) {
      return { block: data.result };
    }

    return { block: null };
  },

  async fetch() {
    this.loadingFetchTransactions = true;
    const data = await this.$axios.$post('', {
      jsonrpc: '2.0',
      method: 'txns_block',
      params: [parseInt(this.id), this.transactionOffset, this.transactionLimit],
      id: 1,
    });
    if (data.result && data.result.values) {
      if (this.transactionOffset === 0) {
        this.transactions = data.result.values;
      } else {
        this.transactions.push(...data.result.values);
      }
      this.transactionOffset += this.transactionLimit;
    }
    this.loadingFetchTransactions = false;
  },

  data() {
    return {
      columns,
      loadingFetchTransactions: false,
      transactions: [],
      transactionOffset: 0,
      transactionLimit: 10,
      cacheShowAllInstuction: new Map(),
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
  },

  methods: {
    showAllInstruction(record) {
      let cacheShowAllInstuction = _.cloneDeep(this.cacheShowAllInstuction);
      const signature = record[2];
      const showAllInstuction = !cacheShowAllInstuction.get(signature);
      cacheShowAllInstuction.set(signature, showAllInstuction);
      this.cacheShowAllInstuction = cacheShowAllInstuction;
    },
  },
};
</script>
