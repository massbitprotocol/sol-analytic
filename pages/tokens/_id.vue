<template>
  <div class="pb-5">
    <div class="flex items-center justify-between mb-5">
      <div class="flex items-center text-3xl font-bold ">
        <BackButton class="mr-2 " />
        Token
      </div>

      <BlockSearch />
    </div>

    <div class="grid grid-cols-2 gap-5">
      <BaseBlock>
        <div class="text-xl font-bold text-gray-500">
          Market Overview
        </div>

        <table class="table-auto mt-5">
          <tbody>
            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Price
              </td>
              <td class="pr-6 py-3 text-gray-900">$6.78</td>
            </tr>

            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Fully Dilluted Market Cap
              </td>
              <td class="pr-6 py-3 text-gray-900">$67,781,027,704.68</td>
            </tr>

            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Max Total Supply
              </td>
              <td class="pr-6 py-3 text-gray-900">
                9,997,201,726.35
              </td>
            </tr>

            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Holders
              </td>
              <td class="pr-6 py-3 text-gray-900">34,412</td>
            </tr>

            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Website
              </td>
              <td class="pr-6 py-3 text-gray-900">
                <a class="text-blue-500" href="https://projectserum.com/" target="_blank" rel="noopener noreferrer">
                  https://projectserum.com/
                </a>
              </td>
            </tr>

            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Social Channels
              </td>
              <td class="pr-6 py-3 text-gray-900">
                Coingecko
              </td>
            </tr>
          </tbody>
        </table>
      </BaseBlock>

      <BaseBlock>
        <div class="text-xl font-bold text-gray-500">
          Profile Summary
        </div>

        <table class="table-auto mt-5">
          <tbody>
            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Token name
              </td>
              <td class="pr-6 py-3 text-gray-900">
                Wrapped SOL (SOL)
              </td>
            </tr>

            <tr>
              <td class="text-base text-gray-500 pr-6 py-3 ">
                Token address
              </td>
              <td
                class="pr-6 py-3 text-gray-900 max-w-0 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
              >
                So11111111111111111111111111111111111111112
              </td>
            </tr>

            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Owner Program
              </td>
              <td class="pr-6 py-3 text-gray-900">
                <a class="text-blue-500" href="#">
                  Token Program
                </a>
              </td>
            </tr>

            <tr>
              <td class="text-base text-gray-500 pr-6 py-3">
                Decimals
              </td>
              <td class="pr-6 py-3 text-gray-900">
                9
              </td>
            </tr>
          </tbody>
        </table>
      </BaseBlock>
    </div>

    <BaseTabs class="mt-5" :headers="tabHeaders" :current-tab.sync="current_tab">
      <template #transactions>
        <TransactionTable class="mt-5" :columns="columns" :data-source="transactions">
          <template #block="{item}">
            <NuxtLink class="text-base text-blue-500" :to="{ name: '' }"> #{{ item }} </NuxtLink>
          </template>

          <template #by="{item}">
            <NuxtLink
              class="text-base text-blue-500"
              :to="{ name: '' }"
              v-tooltip.bottom-start="{ content: `${item}`, class: 'hide-arrow text-xs' }"
            >
              {{ item }}
            </NuxtLink>
          </template>

          <template #signature="{item,record}">
            <div
              class="inline-grid items-center"
              v-tooltip.bottom-start="{ content: `${item}`, class: 'hide-arrow text-xs' }"
            >
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
                class="text-base text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                :to="{ name: 'transactions-id', params: { id: item } }"
              >
                {{ item }}
              </NuxtLink>
            </div>
          </template>

          <template #timestamp="{item}">
            <span class="text-base text-gray-900">
              {{ item | formatTimeDuration }}
            </span>
          </template>

          <template #instructions="{item,record}">
            <template v-if="Array.isArray(item) && item.length > 0">
              <div
                class="inline-grid text-base text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                v-if="item.length === 1"
              >
                <a
                  href="#"
                  class="text-base text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                  v-tooltip.bottom-start="{ content: `${item[0]}`, class: 'hide-arrow text-xs' }"
                >
                  {{ item[0] }}
                </a>
              </div>
              <div v-else class="inline-grid grid-cols-1 gap-2">
                <div
                  class="flex items-center gap-1 text-base overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                >
                  <a
                    class="text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                    href=""
                    v-tooltip.bottom-start="{ content: `${item[0]}`, class: 'hide-arrow text-xs' }"
                  >
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
                    class="text-base text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                    href=""
                    v-tooltip.bottom-start="{ content: `${instruction}`, class: 'hide-arrow text-xs' }"
                  >
                    {{ instruction }}
                  </a>
                </template>
              </div>
            </template>
          </template>
        </TransactionTable>

        <!-- Load more transaction -->
        <div v-if="transactions.length > 0" class="flex items-center justify-center w-full py-5">
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
      </template>
    </BaseTabs>
  </div>
</template>

<script>
const tabHeaders = [
  {
    name: 'Transactions',
    key: 'transactions',
  },
  {
    name: 'Holders',
    key: 'holders',
  },
];
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
      method: 'getAccountInfo',
      params: [params.id, 'jsonParsed'],
      id: 1,
    });
    if (data.result) {
      return { account: data.result };
    }

    return { account: null };
  },

  async fetch() {
    this.loadingFetchTransactions = true;
    const data = await this.$axios.$post('', {
      jsonrpc: '2.0',
      method: 'getTransactionByAddress',
      params: [this.id, null, this.transactionLimit],
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
      tabHeaders,
      columns,
      current_tab: 'transactions',
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
