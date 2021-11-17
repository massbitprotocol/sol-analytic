<template>
  <div class="relative inline-block text-left">
    <div class="relative flex items-center w-full">
      <input
        type="text"
        @focus="showDropdown = true"
        placeholder="Search transactions, blocks, tokens..."
        class="
          relative
          w-full
          h-[52px]
          pr-15
          flex
          items-center
          border border-primary-background
          text-body-2
          placeholder-gray-300
          rounded-lg
        "
      />
      <span
        class="absolute flex items-center justify-center rounded right-0 px-5 py-2 border-l border-primary-background"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.59998 8.39967C3.59998 5.75261 5.75276 3.59992 8.39994 3.59992C11.0471 3.59992 13.1999 5.75261 13.1999 8.39967C13.1999 11.0467 11.0471 13.1994 8.39994 13.1994C5.75276 13.1994 3.59998 11.0467 3.59998 8.39967ZM17.7654 16.6336L13.4495 12.3171C14.3245 11.1987 14.7999 9.81964 14.7999 8.39967C14.7999 4.87105 11.9287 2 8.39994 2C4.87117 2 2 4.87105 2 8.39967C2 11.9283 4.87117 14.7993 8.39994 14.7993C9.81988 14.7989 11.1989 14.3236 12.3175 13.449L16.6343 17.7648C16.7084 17.8393 16.7965 17.8985 16.8936 17.9389C16.9906 17.9792 17.0947 18 17.1998 18C17.305 18 17.4091 17.9792 17.5061 17.9389C17.6032 17.8985 17.6913 17.8393 17.7654 17.7648C17.8398 17.6906 17.8988 17.6024 17.939 17.5054C17.9793 17.4083 18 17.3043 18 17.1992C18 17.0942 17.9793 16.9901 17.939 16.8931C17.8988 16.796 17.8398 16.7079 17.7654 16.6336"
            fill="#050C72"
          />
        </svg>
      </span>
    </div>

    <button
      type="button"
      class="fixed inset-0 h-full w-full cursor-default focus:outline-none"
      v-if="showDropdown"
      @click="showDropdown = false"
      tabindex="-1"
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
        v-if="showDropdown"
        class="
          origin-center
          absolute
          right-0
          mt-2
          w-full
          shadow-lg
          bg-white
          divide-y divide-gray-100
          focus:outline-none
        "
      >
        <div class="px-4 py-2 text-base">Search</div>
        <div class="hover:bg-gray-50 block px-4 py-2 text-base">ok</div>
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: 'TheSearch',

  data() {
    return {
      showDropdown: false,
    };
  },
};
</script>
