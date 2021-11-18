<template>
  <div>
    <!-- Overview -->
    <div>
      <div class="uppercase font-bold text-heading-2 text-neutral-darkest">Overview</div>

      <BaseBlock class="mt-4">
        <table v-if="loading" class="table-auto">
          <tbody>
            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Signature</td>
              <td>
                <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Block</td>

              <td>
                <div class="w-38 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Timestamp</td>

              <td>
                <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Result</td>
              <td>
                <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Signer</td>
              <td>
                <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Reward</td>
              <td>
                <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
              </td>
            </tr>

            <tr class="w-full">
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Main Actions</td>
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

        <table v-else class="w-full">
          <colgroup>
            <col span="1" width="220" />
            <col span="1" />
          </colgroup>

          <tbody>
            <!-- Signature -->
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Signature</td>
              <td class="relative max-w-0 py-3 text-body-2 text-neutral-darkest font-medium">
                <div class="w-full inline-flex items-center justify-items-start gap-2">
                  <div class="overflow-ellipsis whitespace-nowrap break-words overflow-hidden">
                    {{ transaction.signature }}
                  </div>

                  <TheCopyButton buttonClass="bg-primary-background" :textToCopy="transaction.signature" />
                </div>
              </td>
            </tr>

            <!-- Block -->
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Block</td>
              <td class="py-3 text-body-2 font-medium">
                <NuxtLink class="text-primary" :to="{ name: 'blocks-id', params: { id: transaction.slot } }">
                  #{{ transaction.slot }}
                </NuxtLink>
              </td>
            </tr>

            <!-- Timestamp -->
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Timestamp</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">
                <span>{{ transaction.block_time | formatTimeDuration }}</span>
                <span class="text-neutral-normal/60 mx-2">|</span>
                <span class="text-neutral-normal/60">{{ transaction.block_time | formatTimeUTC }}</span>
              </td>
            </tr>

            <!-- Result -->
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Result</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">
                <template v-if="transaction.status && parseInt(transaction.status) === 1">
                  <span class="mr-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="24" height="24" rx="12" fill="#00B159" />
                      <path
                        d="M10.5733 15.9999C10.4819 15.9996 10.3916 15.9806 10.3078 15.9439C10.2241 15.9072 10.1488 15.8536 10.0867 15.7866L6.84667 12.3399C6.72555 12.2109 6.66067 12.039 6.6663 11.8621C6.67193 11.6852 6.7476 11.5177 6.87667 11.3966C7.00574 11.2755 7.17764 11.2106 7.35455 11.2162C7.53146 11.2219 7.69889 11.2975 7.82 11.4266L10.5667 14.3533L16.1733 8.21994C16.2302 8.14909 16.301 8.09062 16.3813 8.04812C16.4617 8.00562 16.5498 7.97998 16.6404 7.97279C16.731 7.9656 16.8221 7.97701 16.9081 8.00631C16.9941 8.03561 17.0732 8.08218 17.1406 8.14317C17.208 8.20416 17.2621 8.27828 17.2998 8.36097C17.3375 8.44366 17.3579 8.53318 17.3597 8.62403C17.3615 8.71488 17.3447 8.80515 17.3104 8.88928C17.276 8.97341 17.2249 9.04964 17.16 9.11327L11.0667 15.7799C11.0051 15.8482 10.9301 15.9029 10.8463 15.9408C10.7626 15.9787 10.6719 15.9988 10.58 15.9999H10.5733Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span class="text-body-2 font-medium text-accent-green"> Success </span>
                  <span class="text-neutral-normal/60 mx-2">|</span>
                  <span class="text-body-2 font-medium text-accent-green">Finalized (MAX confirmations)</span>
                </template>
                <template v-else>
                  <svg
                    class="mr-1"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="12" fill="#EB5757" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.1312 12.0004L16.5656 8.566C16.8784 8.2532 16.8784 7.7476 16.5656 7.4348C16.2528 7.122 15.7472 7.122 15.4344 7.4348L12 10.8692L8.56563 7.4348C8.25283 7.122 7.74723 7.122 7.43443 7.4348C7.12163 7.7476 7.12163 8.2532 7.43443 8.566L10.8688 12.0004L7.43443 15.4348C7.12163 15.7476 7.12163 16.2532 7.43443 16.566C7.59043 16.722 7.79523 16.8004 8.00003 16.8004C8.20483 16.8004 8.40963 16.722 8.56563 16.566L12 13.1316L15.4344 16.566C15.5904 16.722 15.7952 16.8004 16 16.8004C16.2048 16.8004 16.4096 16.722 16.5656 16.566C16.8784 16.2532 16.8784 15.7476 16.5656 15.4348L13.1312 12.0004Z"
                      fill="white"
                    />
                  </svg>

                  <span class="text-body-2 font-medium text-accent-red"> Fail </span>
                  <span class="text-neutral-normal/60 mx-2">|</span>
                  <span class="text-body-2 font-medium text-accent-green">Finalized (MAX confirmations)</span>
                </template>
              </td>
            </tr>

            <!-- Signer -->
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Signer</td>
              <td
                class="
                  relative
                  max-w-0
                  text-body-2 text-neutral-darkest
                  font-medium
                  py-3
                  overflow-ellipsis
                  whitespace-nowrap
                  break-words
                  overflow-hidden
                "
              >
                {{ transaction.signer }}
              </td>
            </tr>

            <!-- Reward -->
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Reward</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">
                <span>{{ transaction.fee / 1000000000 }} SOL</span>
                <span class="text-neutral-normal/60 mx-2">|</span>
                <span class="text-neutral-normal/60">SOL price: ?</span>
              </td>
            </tr>

            <!-- Main Actions -->
            <tr>
              <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3">Main Actions</td>
              <td class="py-3 text-body-2 text-neutral-darkest font-medium">?</td>
            </tr>
            <tr>
              <td
                class="
                  relative
                  max-w-0
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
                {{ transaction.recent_blockhash }}
              </td>
            </tr>
          </tbody>
        </table>
      </BaseBlock>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlocksDetailOverview',

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
