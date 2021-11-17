<template>
  <div>
    <div class="uppercase font-bold text-heading-2 text-neutral-darkest">Transactions</div>

    <BaseTable class="mt-4" :columns="columns" :data-source="dataSource" :loading="loading">
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
            class="inline-grid text-body-1 text-primary overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
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

export default {
  name: 'BlocksTransactions',

  data() {
    return {
      columns,
      dataSource: [],
      transactionOffset: 0,
      transactionLimit: 10,
      loading: false,
      cacheShowAllInstuction: new Map(),
    };
  },

  computed: {
    id() {
      return this.$route.params.id;
    },
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
          method: 'getTransactionByBlock',
          params: [parseInt(this.id), this.transactionOffset, this.transactionLimit],
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
