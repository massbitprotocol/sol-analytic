<template>
  <div class="pb-5">
    <div class="text-3xl font-bold mb-5">
      Tokens
    </div>

    <BaseTable :columns="columns" :data-source="dataSource">
      <template #no="{index}">
        {{ index + 1 }}
      </template>

      <template #token="{item,record}">
        <div class="flex items-center">
          <img class="mr-3" :src="record.logoURI" width="25" height="25" loading="lazy" />
          <NuxtLink class="text-base text-blue-500" :to="{ name: 'tokens-id', params: { id: record.address } }">
            {{ item }}
          </NuxtLink>
        </div>
      </template>
    </BaseTable>

    <div class="flex items-center justify-center w-full py-5">
      <div @click="$fetch" class="flex items-center justify-center cursor-pointer">
        <svg
          v-if="loadingGetTokens"
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
  </div>
</template>

<script>
const columns = [
  {
    title: '#',
    slotScope: 'no',
    width: '50px',
  },
  {
    title: 'Token',
    dataIndex: 'name',
    slotScope: 'token',
    width: '150px',
    class: 'text-blue-500 overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: '',
    dataIndex: 'symbol',
    width: '150px',
  },
];
export default {
  name: 'Index',

  async asyncData({ $axios }) {
    const data = await $axios.$get(
      'https://raw.githubusercontent.com/solana-labs/token-list/main/src/tokens/solana.tokenlist.json',
      {},
    );
    if (data.tokens) {
      return { tokens: data.tokens };
    }

    return { tokens: [] };
  },

  async fetch() {
    if (this.offset) {
      this.loadingGetTokens = true;

      await this.$utils.sleep(500);
    }

    let _tokens = _.cloneDeep(this.tokens);
    this.offset += 50;
    this.dataSource = _tokens.slice(0, this.offset);

    this.loadingGetTokens = false;
  },

  data() {
    return {
      tokens: [],
      dataSource: [],
      columns,
      loadingGetTokens: false,
      offset: 0,
      limit: 50,
    };
  },
};
</script>
