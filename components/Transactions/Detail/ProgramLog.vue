<template>
  <div>
    <!-- Instruction Details -->
    <BaseGhostBlock class="h-full">
      <table v-if="loading" class="table-auto">
        <colgroup>
          <col span="1" width="220" />
          <col span="1" />
        </colgroup>

        <tbody>
          <tr class="w-full">
            <td class="font-bold text-body-1 text-neutral-darkest whitespace-nowrap">Program log</td>
            <td>
              <div class="w-96 h-5 bg-neutral-white"></div>
            </td>
          </tr>

          <!-- Logs -->
          <tr class="w-full">
            <td class="py-3">
              <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
            </td>
          </tr>

          <tr class="w-full">
            <td class="py-3">
              <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
            </td>
          </tr>

          <tr class="w-full">
            <td class="py-3">
              <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
            </td>
          </tr>
        </tbody>
      </table>

      <table v-else class="w-full">
        <colgroup>
          <col span="1" width="220" />
        </colgroup>

        <tbody>
          <!-- Title -->
          <tr>
            <td class="font-bold text-body-1 text-neutral-darkest whitespace-nowrap">Program log</td>
          </tr>

          <!-- Logs -->
          <tr v-for="(log, index) in transaction.logs" :key="index">
            <td
              class="
                relative
                max-w-0
                py-3
                text-body-2 text-neutral-darkest
                font-medium
                overflow-ellipsis
                whitespace-nowrap
                break-words
                overflow-hidden
              "
            >
              {{ log }}
            </td>
          </tr>
        </tbody>
      </table>
    </BaseGhostBlock>
  </div>
</template>

<script>
export default {
  name: 'TransactionsDetailProgramLog',

  props: {
    transaction: {
      type: Object,
      default: () => ({}),
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
