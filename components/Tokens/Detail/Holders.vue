<template>
  <div>
    <BaseTable :columns="columns" :data-source="dataSource" :loading="loading">
      <!-- address -->
      <template #address="{ item }">
        {{ item }}
      </template>

      <!-- owner -->
      <template #owner="{ item }">
        {{ item }}
      </template>

      <!-- quantity -->
      <template #quantity="{ item }">
        {{ item | formatPrice }}
      </template>

      <!-- value -->
      <template #value="{ item }">
        {{ item | formatPrice }}
      </template>
    </BaseTable>

    <BaseButton
      class="h-[52px] flex items-center justify-center mt-7.5 mx-auto px-15"
      :loading="loadingButtonLoadmore"
      @click="loadMoreTransactions"
    >
      <span class="text-neutral-white text-body-1 font-medium font-normal"> Load more </span>
    </BaseButton>
  </div>
</template>

<script>
const columns = [
  {
    title: 'Address',
    dataIndex: 'address',
    slotScope: 'address',
    width: '250px',
    class:
      'text-body-1 font-medium text-neutral-darker overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: 'Owner',
    dataIndex: 'owner',
    slotScope: 'owner',
    width: '200px',
    class:
      'text-body-1 font-medium text-neutral-darker overflow-ellipsis whitespace-nowrap break-words overflow-hidden',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    slotScope: 'quantity',
    width: '120px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
  {
    title: 'Percentage',
    dataIndex: 'percentage',
    width: '120px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    slotScope: 'value',
    width: '120px',
    class: 'text-body-1 font-medium text-neutral-darker',
  },
];
const dataSource = [
  {
    address: '4ogieLKM3HDfngzr4QyX9wZthMDc1oGvoasdasdasSASDcas',
    owner: 'CesomLhDYDPsNe4s9JkD8ezRZ',
    quantity: 9000000000.406134,
    percentage: '90.0269%',
    value: 74160000003.35,
  },
  {
    address: '4ogieLKM3HDfngzr4QyX9wZthMDc1oGvoasdasdasSASDcas',
    owner: 'CesomLhDYDPsNe4s9JkD8ezRZ',
    quantity: 9000000000.406134,
    percentage: '90.0269%',
    value: 74160000003.35,
  },
  {
    address: '4ogieLKM3HDfngzr4QyX9wZthMDc1oGvoasdasdasSASDcas',
    owner: 'CesomLhDYDPsNe4s9JkD8ezRZ',
    quantity: 9000000000.406134,
    percentage: '90.0269%',
    value: 74160000003.35,
  },
  {
    address: '4ogieLKM3HDfngzr4QyX9wZthMDc1oGvoasdasdasSASDcas',
    owner: 'CesomLhDYDPsNe4s9JkD8ezRZ',
    quantity: 9000000000.406134,
    percentage: '90.0269%',
    value: 74160000003.35,
  },
  {
    address: '4ogieLKM3HDfngzr4QyX9wZthMDc1oGvoasdasdasSASDcas',
    owner: 'CesomLhDYDPsNe4s9JkD8ezRZ',
    quantity: 9000000000.406134,
    percentage: '90.0269%',
    value: 74160000003.35,
  },
];

export default {
  name: 'TokensDetailHolders',

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      columns,
      dataSource,
      loadingButtonLoadmore: false,
    };
  },

  methods: {
    loadMoreTransactions() {
      // LoadMoreTransactions
    },
  },
};
</script>
