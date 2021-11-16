<template>
  <label :for="`base-toggle-${refId}`" class="flex items-center cursor-pointer">
    <!-- toggle -->
    <div class="relative">
      <!-- input -->
      <input v-model="_checked" type="checkbox" :id="`base-toggle-${refId}`" class="sr-only" />
      <!-- line -->
      <div
        :class="{ 'block  w-14 h-8 rounded-full': true, 'bg-primary': checked, 'bg-primary-background': !checked }"
      ></div>
      <!-- dot -->
      <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
    </div>
    <!-- label -->
    <slot name="title" />
  </label>
</template>

<script>
export default {
  name: 'BaseToggle',

  props: {
    checked: {
      type: Boolean,
      default: false,
    },

    refId: {
      type: String,
      default: '',
    },
  },

  computed: {
    _checked: {
      get() {
        return this.checked;
      },

      set(value) {
        this.$emit('update:checked', value);
      },
    },
  },
};
</script>

<style scoped>
input:checked ~ .dot {
  transform: translateX(100%);
  background-color: #fff;
}
</style>
