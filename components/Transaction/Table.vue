<template>
  <div class="flex flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="w-full divide-y divide-gray-200">
            <colgroup>
              <template v-for="(column, index) in columns">
                <col v-if="column.width" span="1" :key="index" :width="column.width" />
                <col v-else :key="index" />
              </template>
            </colgroup>

            <thead class="bg-gray-50">
              <!-- <client-only> -->
              <tr>
                <th
                  v-for="(column, index) in columns"
                  :key="index"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {{ column.title }}
                </th>
              </tr>
              <!-- </client-only> -->
            </thead>

            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(data, index) in dataSource" :key="index" class="hover:bg-gray-100">
                <td
                  v-for="(column, columnIndex) in columns"
                  :key="columnIndex"
                  :class="[column.class, 'relative px-6 py-4 max-w-0 align-top']"
                >
                  <slot v-if="column.slotScope" :name="column.slotScope" :record="data" :item="data[column.key]"></slot>
                  <div v-else class="text-sm text-gray-900">
                    <template v-if="data[column.key]">
                      {{ data[column.key] }}
                    </template>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransactionTable',

  props: {
    columns: {
      type: Array,
      default: () => [],
      required: true,
    },

    dataSource: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
