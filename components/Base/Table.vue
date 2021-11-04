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
              <tr>
                <th
                  v-for="(column, index) in columns"
                  :key="index"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {{ column.title }}
                </th>
              </tr>
            </thead>

            <!-- Loading -->
            <tbody class="bg-white divide-y divide-gray-200">
              <template v-if="loading">
                <tr class="h-[65vh]">
                  <td :colspan="columns.length">
                    <div class="w-full flex flex-col items-center justify-center py-10">
                      <svg
                        class="w-10 animate-spin text-gray-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span class="text-base text-gray-400 mt-2">
                        Loading data...
                      </span>
                    </div>
                  </td>
                </tr>
              </template>

              <template v-else>
                <template v-if="dataSource && dataSource.length > 0">
                  <tr v-for="(data, index) in dataSource" :key="index" class="hover:bg-gray-100">
                    <td
                      v-for="(column, columnIndex) in columns"
                      :key="columnIndex"
                      :class="[column.class, 'relative px-6 py-4 max-w-0']"
                    >
                      <slot
                        v-if="column.slotScope"
                        :name="column.slotScope"
                        :record="data"
                        :index="index"
                        :item="data[column.dataIndex]"
                      ></slot>
                      <div v-else class="text-base text-gray-900">
                        <template v-if="data.hasOwnProperty(column.dataIndex)">
                          {{ data[column.dataIndex] }}
                        </template>
                      </div>
                    </td>
                  </tr>
                </template>

                <template v-else>
                  <tr class="h-[65vh]">
                    <td :colspan="columns.length">
                      <div class="w-full flex flex-col items-center justify-center py-10">
                        <svg
                          class="w-15 h-15"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          width="256"
                          height="256"
                          viewBox="0 0 256 256"
                          xml:space="preserve"
                        >
                          <g transform="translate(128 128) scale(0.72 0.72)" style="">
                            <g
                              style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                              transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)"
                            >
                              <path
                                d="M 45 82.073 c -11.989 0 -21.743 -9.754 -21.743 -21.742 c 0 -11.989 9.754 -21.743 21.743 -21.743 c 11.989 0 21.743 9.754 21.743 21.743 C 66.743 72.319 56.989 82.073 45 82.073 z M 45 42.588 c -9.783 0 -17.743 7.96 -17.743 17.743 S 35.217 78.073 45 78.073 s 17.743 -7.959 17.743 -17.742 S 54.783 42.588 45 42.588 z"
                                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(158,158,158); fill-rule: nonzero; opacity: 1;"
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                              <path
                                d="M 70.63 69.184 h -7.11 v -4 h 7.11 c 8.476 0 15.37 -6.895 15.37 -15.37 c 0 -8.475 -6.895 -15.37 -15.37 -15.37 h -2.113 l -0.204 -1.77 C 66.943 20.846 56.921 11.927 45 11.927 c -11.921 0 -21.944 8.919 -23.313 20.747 l -0.205 1.77 H 19.37 C 10.895 34.444 4 41.339 4 49.813 c 0 8.476 6.895 15.37 15.37 15.37 h 7.111 v 4 H 19.37 C 8.689 69.184 0 60.494 0 49.813 c 0 -10.209 7.939 -18.599 17.968 -19.319 C 20.302 17.513 31.631 7.927 45 7.927 s 24.697 9.586 27.032 22.567 C 82.061 31.215 90 39.604 90 49.813 C 90 60.494 81.311 69.184 70.63 69.184 z"
                                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(158,158,158); fill-rule: nonzero; opacity: 1;"
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                              <path
                                d="M 52.79 70.079 c -0.512 0 -1.023 -0.195 -1.414 -0.586 L 35.879 53.996 c -0.781 -0.781 -0.781 -2.047 0 -2.828 c 0.78 -0.781 2.048 -0.781 2.828 0 l 15.497 15.497 c 0.781 0.781 0.781 2.047 0 2.828 C 53.813 69.884 53.302 70.079 52.79 70.079 z"
                                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(158,158,158); fill-rule: nonzero; opacity: 1;"
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                              <path
                                d="M 37.293 70.079 c -0.512 0 -1.024 -0.195 -1.414 -0.586 c -0.781 -0.781 -0.781 -2.047 0 -2.828 l 15.497 -15.497 c 0.781 -0.781 2.047 -0.781 2.828 0 s 0.781 2.047 0 2.828 L 38.707 69.493 C 38.317 69.884 37.805 70.079 37.293 70.079 z"
                                style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(158,158,158); fill-rule: nonzero; opacity: 1;"
                                transform=" matrix(1 0 0 1 0 0) "
                                stroke-linecap="round"
                              />
                            </g>
                          </g>
                        </svg>
                        <div class="text-base text-gray-400">
                          No Data
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',

  props: {
    loading: {
      type: Boolean,
      default: false,
    },

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
