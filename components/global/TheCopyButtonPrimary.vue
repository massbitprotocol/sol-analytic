<template>
  <div class="relative">
    <button
      type="button"
      class="flex items-center justify-center rounded p-2 w-9 h-9 transition duration-150 ease-out"
      :class="[copied ? 'text-white bg-primary' : 'text-white bg-primary']"
      @click="copyToClipboard"
    >
      <span class="sr-only">Copy code</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.5 0C4.67157 0 4 0.671573 4 1.5V11C4 11.5523 4.44771 12 5 12H14.5C15.3284 12 16 11.3284 16 10.5V1.5C16 0.671573 15.3284 0 14.5 0H5.5Z"
        />
        <path
          d="M1.5 4H2V14H12V14.5C12 15.3284 11.3284 16 10.5 16H1.5C0.671573 16 0 15.3284 0 14.5V5.5C0 4.67157 0.671573 4 1.5 4Z"
        />
      </svg>
    </button>
    <div v-show="copied" class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2">
      <div
        class="
          text-[0.625rem]
          leading-4
          tracking-wide
          text-white
          bg-neutral-darkest
          px-3
          py-1
          rounded-md
          font-medium
          uppercase
        "
      >
        <svg width="16" height="6" viewBox="0 0 16 6" class="text-gray-900 absolute top-full left-1/2 -mt-px -ml-2">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z"
            fill="currentColor"
          ></path>
        </svg>
        Copied!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCopyButtonPrimary',
  props: {
    textToCopy: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      copied: false,
      copyTimeout: null,
    };
  },

  methods: {
    copyToClipboard() {
      navigator.clipboard.writeText(this.textToCopy).then(() => {
        this.copied = true;
        clearTimeout(this.copyTimeout);
        this.copyTimeout = setTimeout(() => {
          this.copied = false;
        }, 1500);
      });
    },
  },
};
</script>
