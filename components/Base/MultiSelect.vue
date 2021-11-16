<template>
  <div
    @click="hoverToInput"
    class="relative min-h-[44px] flex items-center flex-wrap gap-x-3 px-4 border border-primary-background rounded-lg"
  >
    <!-- Tags -->
    <div
      v-for="(selectItem, index) in _selected"
      :key="index"
      class="flex items-center justify-center my-2 px-3 py-1 rounded bg-neutral-lightest"
    >
      <span class="mr-2 text-body-2 text-neutral-darkest font-semibold"> {{ getItemName(selectItem) }} </span>

      <div @click.stop="removeItem(selectItem)" class="flex items-center text-neutral-darkest cursor-pointer">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.4142 10L15.7072 5.70701C16.0982 5.31601 16.0982 4.68401 15.7072 4.29301C15.3162 3.90201 14.6842 3.90201 14.2933 4.29301L10.0002 8.58601L5.70725 4.29301C5.31625 3.90201 4.68425 3.90201 4.29325 4.29301C3.90225 4.68401 3.90225 5.31601 4.29325 5.70701L8.58625 10L4.29325 14.293C3.90225 14.684 3.90225 15.316 4.29325 15.707C4.48825 15.902 4.74425 16 5.00025 16C5.25625 16 5.51225 15.902 5.70725 15.707L10.0002 11.414L14.2933 15.707C14.4882 15.902 14.7443 16 15.0002 16C15.2562 16 15.5122 15.902 15.7072 15.707C16.0982 15.316 16.0982 14.684 15.7072 14.293L11.4142 10Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>

    <!-- Backdrop hide dropdowm -->
    <button
      type="button"
      class="fixed inset-0 h-full w-full cursor-default focus:outline-none"
      v-if="showMenu"
      @click.stop="showMenu = false"
      tabindex="-1"
    ></button>

    <!-- Input search -->
    <input
      v-show="showMenu"
      v-model="filterText"
      :size="filterText ? filterText.length : 1"
      class="border-none border-transparent !ring-0 !ring-transparent"
      ref="input"
      type="text"
    />

    <div
      v-show="showMenu"
      class="w-full absolute z-10 max-h-[300px] overflow-auto bg-white top-full left-0 shadow-lg rounded-lg"
    >
      <template v-if="_sourceData && _sourceData.length > 0">
        <div
          v-for="(source, index) in _sourceData"
          :key="index"
          v-show="!filterText || source.name.toLowerCase().includes(filterText.toLowerCase())"
          @click="onSelectItem(source)"
          class="
            p-3
            text-body-2
            lg:text-body-1
            text-neutral-darker
            font-semibold
            hover:bg-primary-background
            cursor-pointer
          "
        >
          {{ source.name }}
        </div>
      </template>

      <div v-else class="p-3 text-body-2 lg:text-body-1 text-neutral-lighter font-semibold">No data</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseMultiSelect',

  props: {
    selected: {
      type: Array,
      default: () => [],
    },

    sourceData: {
      type: Array,
      default: () => [],
    },

    source: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      showMenu: false,
      filterText: '',
    };
  },

  computed: {
    _selected: {
      get() {
        return this.selected;
      },

      set(value) {
        this.$emit('update:selected', value);
      },
    },

    _sourceData: {
      get() {
        return this.sourceData;
      },

      set(value) {
        this.$emit('update:sourceData', value);
      },
    },
  },

  methods: {
    hoverToInput() {
      this.showMenu = true;
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },

    getItemName(key) {
      const item = this.source.find((item) => item.key === key);
      if (item) {
        return item.name;
      }

      return '';
    },

    onSelectItem(source) {
      const index = this._sourceData.findIndex((item) => item.key === source.key);
      if (index !== -1) {
        this._sourceData.splice(index, 1);
      }

      this.filterText = '';
      this._selected.push(source.key);
    },

    removeItem(key) {
      const item = this.source.find((item) => item.key === key);
      if (item) {
        this._sourceData.push(item);
      }

      const index = this.selected.findIndex((item) => item === key);
      if (index !== -1) {
        this._selected.splice(index, 1);
      }
    },
  },
};
</script>
