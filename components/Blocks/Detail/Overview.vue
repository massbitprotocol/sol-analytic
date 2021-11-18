<template>
  <div>
    <!-- Overview -->
    <div>
      <div class="uppercase font-bold text-heading-2 text-neutral-darkest">Overview</div>

      <BaseBlock class="mt-4">
        <table v-if="loading" class="table-auto">
          <tbody>
            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Block</td>
              <td>
                <div class="w-36 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Timestamp</td>

              <td>
                <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Block Hash</td>
              <td>
                <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Leader</td>
              <td>
                <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Reward</td>
              <td>
                <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Transactions</td>
              <td>
                <div class="w-38 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Previous Block Hash</td>
              <td>
                <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>
          </tbody>
        </table>

        <table v-else class="table-auto">
          <tbody>
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Block</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">#{{ block.block_slot }}</td>
            </tr>
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Timestamp</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">
                <span>{{ block.timestamp | formatTimeDuration }}</span>
                <span class="text-neutral-normal/60 mx-2">|</span>
                <span class="text-neutral-normal/60">{{ block.timestamp | formatTimeUTC }}</span>
              </td>
            </tr>
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Block Hash</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">
                {{ block.block_hash }}
              </td>
            </tr>
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Leader</td>
              <td
                class="
                  text-body-2 text-neutral-darkest
                  font-medium
                  py-3
                  overflow-ellipsis
                  whitespace-nowrap
                  break-words
                  overflow-hidden
                "
              >
                {{ block.leader }}
              </td>
            </tr>
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Reward</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">
                <span>{{ block.reward / 1000000000 }} SOL ({{ calculatePrice() }})</span>
                <span class="text-neutral-normal/60 mx-2">|</span>
                <span class="text-neutral-normal/60"> SOL price: ${{ solPrice }} </span>
              </td>
            </tr>
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Transactions</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">
                Total <span class="font-bold">{{ block.transaction_number }}</span> transactions
              </td>
            </tr>
            <tr>
              <td
                class="
                  text-body-2 text-neutral-normal
                  font-medium
                  pr-20
                  py-3
                  overflow-ellipsis
                  whitespace-nowrap
                  break-words
                  overflow-hidden
                "
              >
                Previous Block Hash
              </td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">
                {{ block.previous_block_hash }}
              </td>
            </tr>
          </tbody>
        </table>
      </BaseBlock>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BlocksDetailOverview',

  props: {
    block: {
      type: Object,
      default: () => ({}),
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    ...mapGetters({
      solPrice: 'tokens/solPrice',
    }),
  },

  methods: {
    calculatePrice() {
      if (this.solPrice) {
        const _price = (this.block.reward / 1000000000) * this.solPrice;

        return _price ? _price.toFixed(4) : 0;
      }

      return 0;
    },
  },
};
</script>
