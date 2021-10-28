<template>
  <div class="divide-y divide-gray-100 ">
    <div class="py-5">
      <table class="table-auto w-full">
        <tbody>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Signature
            </td>
            <td
              class="relative max-w-0 pr-6 py-3 text-gray-900 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
            >
              {{ transaction.signature }}
            </td>
          </tr>

          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Block
            </td>
            <td class="pr-6 py-3 text-gray-900">
              <NuxtLink class="text-base text-blue-500" :to="{ name: 'blocks-id', params: { id: transaction.slot } }">
                #{{ transaction.slot }}
              </NuxtLink>
            </td>
          </tr>

          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Timestamp
            </td>
            <td class="pr-6 py-3 text-gray-900">{{ transaction.block_time | formatTimeDuration }}</td>
          </tr>

          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Result
            </td>
            <td class="inline-flex items-center gap-5 pr-6 py-3 text-gray-900">
              <div class="inline-flex items-center">
                <template v-if="parseInt(transaction.status) === 1">
                  <svg
                    class="text-green-500 mr-2"
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="check-circle"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
                    ></path>
                  </svg>
                  <span class="text-green-500">
                    Success
                  </span>
                </template>
                <template v-else-if="parseInt(transaction.status) === 0">
                  <svg
                    class="text-red-600 mr-2"
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
                  <span class="text-red-600">
                    Fail
                  </span>
                </template>
              </div>

              <div class="w-[1px] h-4 bg-gray-300"></div>
              <div class="text-green-500">
                Finalized (MAX confirmations)
              </div>
            </td>
          </tr>

          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Signer
            </td>
            <td class="pr-6 py-3 text-gray-900">
              <a href="" class="text-blue-500">
                {{ transaction.signer }}
              </a>
            </td>
          </tr>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Fee
            </td>
            <td class="pr-6 py-3">{{ transaction.fee / 1000000000 }} SOL</td>
          </tr>
          <tr>
            <td class="text-base text-gray-500 pr-6 py-3">
              Previous Block Hash
            </td>
            <td class="pr-6 py-3 text-gray-900">
              {{ transaction.recent_blockhash }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Instruction Details -->
    <div v-if="transaction.instructions" class="py-5">
      <div class="text-xl font-bold text-blue-500">
        Instruction Details
      </div>

      <template v-for="(instruction, index) in transaction.instructions">
        <div :key="index" class="flex flex-col mt-5">
          <div class="text-md font-bold text-gray-900">#{{ index + 1 }} - Instruction {{ index }}</div>

          <div class="mt-3 text-base text-gray-900 rounded-xl p-3 bg-gray-100 border border-gray-200">
            <table class="table-auto w-full">
              <colgroup>
                <col width="200px" />
                <col />
              </colgroup>

              <tbody>
                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Interact With
                  </td>
                  <td
                    class="relative max-w-0 pr-6 py-3 text-gray-900 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                  >
                    <a href="#" class="text-base text-blue-500">{{ instruction.programId }} </a>
                  </td>
                </tr>

                <tr>
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Instruction Data
                  </td>
                  <td
                    class="relative max-w-0 pr-6 py-3 text-gray-900 overflow-ellipsis whitespace-nowrap break-words overflow-hidden"
                  >
                    {{ instruction.data }}
                  </td>
                </tr>
                <tr class="align-top">
                  <td class="text-base text-gray-500 pr-6 py-3">
                    Input Accounts
                  </td>
                  <td
                    class="relative max-w-0 pr-6 py-3 overflow-ellipsis whitespace-nowrap break-words overflow-hidden text-gray-900 leading-7"
                  >
                    <span v-for="(account, accountIndex) in instruction.accounts" :key="accountIndex">
                      <span class="text-base text-gray-500">#{{ accountIndex + 1 }} - Account{{ accountIndex }} -</span>
                      <a href="#" class="text-base text-blue-500">{{ account }}</a>
                      <br />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </div>

    <!-- Program log -->
    <div v-if="transaction.logs" class="py-5">
      <div class="text-xl font-bold text-blue-500 mb-5">
        Program log
      </div>

      <div
        class="flex flex-col gap-5 mt-3 text-base text-gray-900 rounded-xl px-3 py-6 bg-gray-100 border border-gray-200"
      >
        <div v-for="(log, index) in transaction.logs" :key="index" class="text-base text-gray-900">
          {{ log }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionOverview',

  props: {
    transaction: {
      type: Object,
      default: () => new Object(),
    },
  },

  created() {
    console.log('this.transaction :>> ', this.transaction);
  },
};
</script>
