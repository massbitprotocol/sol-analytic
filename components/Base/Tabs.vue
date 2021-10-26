<template>
  <div>
    <ul class="list-reset flex">
      <template v-for="header in headers">
        <li class="mr-1" :key="header.key" @click="_currentTab = header.key">
          <a
            :class="{
              'bg-white text-blue-500 font-bold': _currentTab === header.key,
              'bg-transparent': !(_currentTab === header.key),
              'text-xl inline-block rounded-t-xl py-3 px-6 hover:text-blue-500 focus:outline-none': true,
            }"
            href="#"
          >
            {{ header.name }}
          </a>
        </li>
      </template>
    </ul>
    <div class="container w-full p-5 bg-white rounded-xl rounded-t-none">
      <template v-for="header in headers">
        <div :key="header.key" v-show="header.key === _currentTab">
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
