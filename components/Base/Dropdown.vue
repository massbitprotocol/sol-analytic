<template>
  <div>
    <div ref="input" class="flex w-full flex-wrap items-center mb-2.5" @click="onShowDropdown">
      <slot />
    </div>

    <button
      v-if="showDropdown"
      type="button"
      class="fixed inset-0 h-full w-full cursor-default focus:outline-none"
      tabindex="-1"
      @click="onHideDropdown"
    ></button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="showDropdown"
        ref="select"
        class="
          base-dropdown
          fixed
          origin-center
          min-w-[150px]
          z-10
          right-0
          rounded-xl
          bg-white
          primary-background
          focus:outline-none
          max-h-[45vh]
        "
      >
        <div class="base-dropdown-arrow"></div>

        <template v-for="(item, index) in source">
          <div
            :key="index"
            :class="{
              'hover:bg-primary-background last:rounded-b-xl block px-4 py-3 text-body-2 text-neutral-darkest font-semibold': true,
              'rounded-t-xl': index === 0,
            }"
            @click="onSelectItem(item)"
          >
            {{ item.value }}
          </div>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'BaseDropdown',

  props: {
    source: {
      type: Array,
      default: () => [],
    },

    width: {
      type: Number,
      default: 150,
    },

    offset: {
      type: Array,
      default: () => [92, 12],
    },
  },

  data() {
    return {
      showDropdown: false,
    };
  },

  methods: {
    onShowDropdown() {
      this.updateSelectPosition();

      this.showDropdown = true;
    },

    onSelectItem(item) {
      this.$emit('on-select-item', item);
      this.showDropdown = false;
    },

    onHideDropdown() {
      this.showDropdown = false;
    },

    updateSelectPosition() {
      if (this.$refs.input && this.$refs.select) {
        const refInput = this.$refs.input;
        const refSelect = this.$refs.select;

        const { height, left, top } = refInput.getBoundingClientRect();
        refSelect.style.width = `${this.width}px`;
        refSelect.style.left = `${left - this.offset[0]}px`;
        refSelect.style.top = `${top + height + this.offset[1]}px`;
      }
    },
  },
};
</script>

<style scoped>
.base-dropdown {
  box-shadow: 0 2px 16px rgba(33, 47, 96, 0.12);
}
.base-dropdown-arrow {
  height: 16px;
  width: 16px;
  background: #fff;
  position: absolute;
  right: 32px;
  top: 0;
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: -1;
}
</style>
