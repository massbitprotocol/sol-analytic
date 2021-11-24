<template>
  <table class="w-full">
    <colgroup>
      <template v-for="(column, index) in _columns">
        <col v-if="column.width" :key="index" span="1" :width="column.width" />
        <col v-else :key="index" />
      </template>
    </colgroup>

    <thead v-show="showHeader">
      <tr>
        <th v-for="(column, index) in _columns" :key="index" class="px-6 py-3">
          <div class="flex items-center justify-between">
            <span class="text-left text-xs font-medium text-white uppercase">
              {{ column.title }}
            </span>

            <span v-if="column.sort" class="cursor-pointer" @click="changeSorter(column.dataIndex)">
              <template v-if="sortType && sortDataIndex === column.dataIndex">
                <!-- Caret up -->
                <svg
                  v-if="sortType === 'desc'"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 12L10 7L5 12H15Z" fill="#050C72" />
                </svg>

                <!-- Caret down -->
                <svg
                  v-if="sortType === 'asc'"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 8L10 13L15 8H5Z" fill="#050C72" />
                </svg>
              </template>

              <template v-else>
                <!-- Caret up and down -->
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10 16L6 12H14L10 16ZM10 4L14 8H6L10 4Z"
                    fill="white"
                  />
                </svg>
              </template>
            </span>
          </div>

          <!-- Filter input -->
          <div v-if="column.filter === 'text'" class="relative flex items-center mt-2 w-full flex-wrap items-stretch">
            <input
              v-model="column.filterInput"
              type="text"
              :placeholder="column.title"
              class="appearance-none block w-full text-body-2 border border-primary-background rounded leading-tight"
            />
            <span
              class="
                flex
                justify-center
                h-full
                leading-snug
                font-normal
                absolute
                align-center
                text-center
                absolute
                bg-transparent
                rounded
                text-base
                items-center
                justify-center
                w-8
                right-0
                pr-3
              "
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.59998 8.39967C3.59998 5.75261 5.75276 3.59992 8.39994 3.59992C11.0471 3.59992 13.1999 5.75261 13.1999 8.39967C13.1999 11.0467 11.0471 13.1994 8.39994 13.1994C5.75276 13.1994 3.59998 11.0467 3.59998 8.39967ZM17.7654 16.6336L13.4495 12.3171C14.3245 11.1987 14.7999 9.81964 14.7999 8.39967C14.7999 4.87105 11.9287 2 8.39994 2C4.87117 2 2 4.87105 2 8.39967C2 11.9283 4.87117 14.7993 8.39994 14.7993C9.81988 14.7989 11.1989 14.3236 12.3175 13.449L16.6343 17.7648C16.7084 17.8393 16.7965 17.8985 16.8936 17.9389C16.9906 17.9792 17.0947 18 17.1998 18C17.305 18 17.4091 17.9792 17.5061 17.9389C17.6032 17.8985 17.6913 17.8393 17.7654 17.7648C17.8398 17.6906 17.8988 17.6024 17.939 17.5054C17.9793 17.4083 18 17.3043 18 17.1992C18 17.0942 17.9793 16.9901 17.939 16.8931C17.8988 16.796 17.8398 16.7079 17.7654 16.6336Z"
                  fill="#717591"
                />
              </svg>
            </span>
          </div>

          <!-- Filter select -->
          <select
            v-else-if="column.filter === 'select'"
            v-model="column.filterInput"
            class="
              flex
              items-center
              mt-2
              w-full
              px-3
              cursor-pointer
              border border-primary-background
              rounded
              text-body-2 text-neutral-darker
              font-semibold
            "
          >
            <template v-for="item in column.filterSelectSource">
              <option :key="item.value" :value="item.value">{{ item.name }}</option>
            </template>
          </select>
        </th>
      </tr>
    </thead>

    <tbody class="bg-white">
      <template v-if="loading">
        <tr class="h-full">
          <td :colspan="columns.length">
            <div class="w-full flex items-center gap-2 justify-center py-15">
              <svg
                class="w-6 animate-spin text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span class="text-body-1 text-neutral-darker font-medium"> Loading... </span>
            </div>
          </td>
        </tr>
      </template>

      <template v-else>
        <template v-if="filterSource && filterSource.length > 0">
          <tr v-for="(data, index) in filterSource" :key="index" class="hover:bg-primary-background">
            <td
              v-for="(column, columnIndex) in _columns"
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
              <div v-else class="text-base">
                <template v-if="data.hasOwnProperty(column.dataIndex)">
                  {{ data[column.dataIndex] }}
                </template>
              </div>
            </td>
          </tr>
        </template>

        <template v-else>
          <tr>
            <td :colspan="_columns.length">
              <div class="w-full flex flex-col items-center justify-center py-10">
                <div class="text-body-1 text-neutral-darker font-medium">No available data</div>
              </div>
            </td>
          </tr>
        </template>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'BaseTable',

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

    showHeader: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      sortType: null,
      sortDataIndex: null,
    };
  },

  computed: {
    _columns: {
      get() {
        return this.columns;
      },

      set(value) {
        this.$emit('update:columns', value);
      },
    },

    filterSource() {
      let _dataSource = [];

      // Get column has filter
      const _columns = this._columns.filter((column) => {
        if (column.filter === 'text') {
          return !!column.filterInput;
        }
        if (column.filter === 'select') {
          return !(column.filterInput === 'all');
        }

        return false;
      });

      if (_columns.length === 0) {
        _dataSource = this.dataSource;
      } else {
        _dataSource = this.dataSource.filter((item) => {
          let filterCheck = true;

          for (let index = 0; index < _columns.length; index++) {
            const column = _columns[index];

            if (Object.prototype.hasOwnProperty.call(item, column.dataIndex)) {
              const _item = item[column.dataIndex];
              switch (column.filter) {
                case 'text':
                  filterCheck = _item.toString().toLowerCase().includes(column.filterInput.toLowerCase()) * filterCheck;
                  break;

                case 'select':
                  filterCheck = (_item.toString().toLowerCase() === column.filterInput.toLowerCase()) * filterCheck;
                  break;

                default:
                  filterCheck = filterCheck * true;
                  break;
              }
            } else {
              filterCheck = false;
            }
          }

          return filterCheck;
        });
      }

      if (_dataSource.length > 0 && this.sortType && this.sortDataIndex) {
        const _sorted = _dataSource.sort((item, next) => {
          const type = typeof item[this.sortDataIndex];
          if (type === 'string') {
            const _item = item[this.sortDataIndex].toLowerCase();
            const _next = next[this.sortDataIndex].toLowerCase();

            if (_item < _next) {
              return -1;
            }
            if (_item > _next) {
              return 1;
            }

            return 0;
          } else if (type === 'number') {
            return item[this.sortDataIndex] - next[this.sortDataIndex];
          }

          return 0;
        });

        if (this.sortType === 'desc') {
          return _sorted;
        }
        return _sorted.reverse();
      }
      return _dataSource;
    },
  },

  methods: {
    changeSorter(dataIndex) {
      if (this.sortDataIndex === dataIndex) {
        const arrSortType = [null, 'desc', 'asc'];
        const index = arrSortType.findIndex((item) => item === this.sortType);
        if (index === arrSortType.length - 1) {
          this.sortType = null;
          this.sortDataIndex = null;
        } else {
          // Set to next type
          this.sortType = arrSortType[index + 1];
        }
      } else {
        this.sortType = 'desc';
        this.sortDataIndex = dataIndex;
      }
    },
  },
};
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  min-width: 350px;
}
table tr th,
table tr td {
  border-bottom: 1px solid #e9ebfa;
  padding: 20px;
}

table tr th {
  background: #2c3acf;
  border-top: 1px solid #e9ebfa;
  text-align: left;
}

table tr th:first-child,
table tr td:first-child {
  border-left: 1px solid #e9ebfa;
}
table tr th:last-child,
table tr td:last-child {
  border-right: 1px solid #e9ebfa;
}
table tr:first-child th:first-child {
  border-top-left-radius: 12px;
}

table tr:first-child th:last-child {
  border-right: 1px solid #e9ebfa;
  border-top-right-radius: 12px;
}

table tr:last-child td:first-child {
  border-bottom-left-radius: 12px;
}

table tr:last-child td:last-child {
  border-right: 1px solid #e9ebfa;
  border-bottom-right-radius: 12px;
}
</style>
