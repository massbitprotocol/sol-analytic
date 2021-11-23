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
          <!-- Title -->
          <tr class="w-full">
            <td class="font-bold text-body-1 text-neutral-darkest whitespace-nowrap">Instruction Details</td>
            <td>
              <div class="w-96 h-5 bg-neutral-white"></div>
            </td>
          </tr>

          <!-- Interact With -->
          <tr class="w-full">
            <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Interact With</td>
            <td>
              <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
            </td>
          </tr>

          <!-- Instruction Data -->
          <tr class="w-full">
            <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Instruction Data</td>
            <td>
              <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
            </td>
          </tr>

          <tr class="align-top">
            <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Input Accounts</td>
            <td class="py-3">
              <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              <div class="w-96 h-5 mt-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              <div class="w-64 h-5 mt-5 animate-pulse bg-neutral-lighter rounded-full"></div>
            </td>
          </tr>
        </tbody>
      </table>

      <table v-else class="w-full">
        <colgroup>
          <col span="1" width="220" />
          <col span="1" />
        </colgroup>

        <tbody>
          <!-- Title -->
          <tr>
            <td class="font-bold text-body-1 text-neutral-darkest whitespace-nowrap">Instruction Details</td>
            <td></td>
          </tr>

          <!-- Interact With -->
          <tr>
            <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Interact With</td>
            <td class="py-3 text-body-2 text-neutral-darkest font-medium">{{ instruction.programId }}</td>
          </tr>

          <!-- Instruction Data -->
          <tr>
            <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Instruction Data</td>
            <td class="relative max-w-0 py-3 text-body-2 text-neutral-darkest font-medium">
              <div class="w-full inline-flex items-center justify-items-start gap-2">
                <div class="overflow-ellipsis whitespace-nowrap break-words overflow-hidden">
                  {{ instruction.data }}
                </div>

                <TheCopyButton :textToCopy="instruction.data" buttonClass="bg-primary-background" />
              </div>
            </td>
          </tr>

          <!-- Input Accounts -->
          <tr class="align-top">
            <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Input Accounts</td>
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
              <span class="leading-7" v-for="(account, accountIndex) in instruction.accounts" :key="accountIndex">
                <span class="text-body-2 font-medium text-neutral-normal/60"
                  >#{{ accountIndex + 1 }} - Account{{ accountIndex }}
                </span>
                <span class="mx-2 text-body-2 font-medium text-neutral-normal/60">|</span>
                <span class="text-body-2 font-medium text-neutral-darkest">{{ account }}</span>
                <br />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </BaseGhostBlock>
  </div>
</template>

<script>
export default {
  name: 'TransactionsDetailInstruction',

  props: {
    instructions: {
      type: Array,
      default: () => [],
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    instruction() {
      return this.instructions[0];
    },
  },
};
</script>
