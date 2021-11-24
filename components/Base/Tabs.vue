<template>
  <div>
    <ul class="flex">
      <template v-for="header in headers">
        <li :key="header.key" class="mr-1 cursor-pointer" @click="_currentTab = header.key">
          <a
            :class="{
              'bg-white text-primary font-bold border-b-2 border-primary': _currentTab === header.key,
              'bg-transparent text-neutral-grey font-semibold': !(_currentTab === header.key),
              'text-body-1 inline-block rounded-t-xl py-3 mr-5 hover:text-blue-500 focus:outline-none uppercase': true,
            }"
          >
            {{ header.name }}
          </a>
        </li>
      </template>
    </ul>

    <div :class="[classBody, 'w-full mt-7.5 bg-white rounded-xl rounded-t-none']">
      <template v-for="header in headers">
        <div v-show="header.key === _currentTab" :key="header.key">
          <slot :name="header.key" />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',

  props: {
    headers: {
      type: Array,
      default: () => [],
      required: true,
    },

    currentTab: {
      type: String,
      required: true,
    },

    classBody: {
      type: String,
      default: '',
    },
  },

  computed: {
    _currentTab: {
      get() {
        return this.currentTab;
      },

      set(value) {
        this.$emit('update:currentTab', value);
      },
    },
  },
};
</script>
