<template>
  <div class="pb-15">
    <div class="w-full flex items-center justify-between">
      <div class="text-title-1 text-neutral-darkest font-bold">Transaction Details</div>

      <TheSearch class="w-4/12" />
    </div>

    <TransactionsDetailOverview class="mt-7.5" :transaction="transaction" :loading="$fetchState.pending" />

    <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-5 mt-7.5">
      <TransactionsDetailInstruction
        v-if="transaction.instructions && transaction.instructions.length > 0"
        :instructions="transaction.instructions"
        :loading="$fetchState.pending"
      />

      <TransactionsDetailProgramLog :transaction="transaction" :loading="$fetchState.pending" />
    </div>

    <TransactionsDetailSolBalanceChange class="mt-15" :transaction="transaction" :loading="$fetchState.pending" />

    <TransactionsDetailTokenBalanceChange class="mt-15" :transaction="transaction" :loading="$fetchState.pending" />
  </div>
</template>

<script>
const transaction = {
  block_time: 1634780008,
  fee: 5000,
  instructions: [
    {
      accounts: [
        '2qBnzsndJhXrcNyKi9EP2pC17YaTcJh9Z3rZ5BwzzKbq',
        '4PD799gihM2SdM8g7PxfSWgQR8cWGNiuzmNzcL2RgpSu',
        '3z4M5C3hkwsCgz2n7mnJZX6uHweQAtMijTsWxFrYtZHD',
        '4PD799gihM2SdM8g7PxfSWgQR8cWGNiuzmNzcL2RgpSu',
        '4PD799gihM2SdM8g7PxfSWgQR8cWGNiuzmNzcL2RgpSu',
      ],
      data: '12VeXEUfH',
      programId: '9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin',
    },
    {
      parsed: {
        info: {
          destination: '31NikDPFmkJQxJ2QbLGJhfSWzFMubFeS5Jegr524fcTy',
          lamports: 2427,
          source: '31NikDPFmkJQxJ2QbLGJhfSWzFMubFeS5Jegr524fcTy',
        },
        type: 'transfer',
      },
      program: 'system',
      programId: '11111111111111111111111111111111',
    },
  ],
  logs: [
    'Program 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin invoke [1]',
    'Program 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin consumed 3652 of 200000 compute units',
    'Program 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin success',
    'Program 11111111111111111111111111111111 invoke [1]',
    'Program 11111111111111111111111111111111 success',
  ],
  recent_blockhash: '6k9mspmCyiosxYgTtGCnGQ8kgkcafqMq1M76JBB8ACTq',
  signature: 'd6xppvVr3hRgSSQsWm3tcTVV5wwj6d8T7qe7aD3XhB3pZUMDpE14nRVC8o2p3fAzE32yghksmqfNAtbicJrNGp9',
  signer: '31NikDPFmkJQxJ2QbLGJhfSWzFMubFeS5Jegr524fcTy',
  slot: 102648785,
  status: '1',
};

export default {
  name: 'Detail',

  async fetch() {
    await this.$utils.sleep(1500);
  },

  data() {
    return {
      transaction,
    };
  },
};
</script>
