<template>
  <div>
    <BaseTable :columns="columns" :data-source="dataSource" :loading="$fetchState.pending">
      <template #no="{ index }">
        {{ index + 1 }}
      </template>

      <template #token="{ item, record }">
        <div class="flex items-center">
          <img class="mr-3" :src="record.logoURI" width="25" height="25" loading="lazy" />
          <NuxtLink
            class="text-body-1 font-medium text-primary"
            :to="{ name: 'tokens-id', params: { id: record.address } }"
          >
            {{ item }}
          </NuxtLink>
        </div>
      </template>
    </BaseTable>

    <BaseButton
      class="h-[52px] flex items-center justify-center mt-7.5 mx-auto px-15"
      :loading="loadingButtonLoadmore"
      @click="loadMoreTokens"
    >
      <span class="text-neutral-white text-body-1 font-normal"> Load more </span>
    </BaseButton>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { cloneDeep } from 'lodash';

const columns = [
  {
    title: '#',
    slotScope: 'no',
    width: '50px',
    class: 'text-body-1 text-neutral-darker font-medium',
  },
  {
    title: 'Token',
    dataIndex: 'name',
    slotScope: 'token',
    width: '150px',
    class: 'text-primary overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: '',
    dataIndex: 'symbol',
    width: '150px',
    class: 'text-body-1 text-neutral-darker font-medium',
  },
];
export default {
  name: 'TokensTable',

  data() {
    return {
      dataSource: [],
      columns,
      offset: 0,
      limit: 50,
      loadingButtonLoadmore: false,
    };
  },

  async fetch() {
    if (!this.tokens || this.tokens.length === 0) {
      await this.$store.dispatch('tokens/fetch');
    }

    const _tokens = cloneDeep(this.tokens);
    this.offset += this.limit;
    this.dataSource = _tokens.slice(0, this.offset);
  },

  computed: {
    ...mapGetters({
      tokens: 'tokens/list',
    }),
  },

  methods: {
    loadMoreTokens() {
      const _tokens = cloneDeep(this.tokens);

      this.offset += this.limit;
      this.dataSource = _tokens.slice(0, this.offset);
    },
  },
};
</script>
