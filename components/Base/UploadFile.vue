<template>
  <ClientOnly>
    <div
      class="
        w-[240px]
        h-[240px]
        relative
        mt-4
        p-3.5
        cursor-pointer
        flex flex-col
        items-center
        justify-center
        border border-primary-background
        rounded-lg
        hover:bg-primary-background
      "
      @drop.prevent="onDropFile"
      @dragleave.prevent
      @dragover.prevent
      @click="showUploadFolder"
    >
      <div
        v-if="loading"
        class="absolute w-full h-full flex items-center justify-center z-10 select-none cursor-not-allowed"
        @click.stop
      >
        <div class="absolute w-full h-full bg-primary-background/50"></div>

        <svg
          class="animate-spin h-8 w-8 text-primary"
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
      </div>

      <template v-if="_preview">
        <img class="w-full h-full object-cover rounded-lg" :src="_preview" alt="" />

        <div
          class="
            w-[36px]
            h-[36px]
            absolute
            -top-3
            -right-3
            flex
            items-center
            justify-center
            bg-neutral-lightest
            rounded-full
            z-10
          "
          @click.stop="removeCurrentImage"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.4142 10L15.7072 5.70701C16.0982 5.31601 16.0982 4.68401 15.7072 4.29301C15.3162 3.90201 14.6842 3.90201 14.2933 4.29301L10.0002 8.58601L5.70725 4.29301C5.31625 3.90201 4.68425 3.90201 4.29325 4.29301C3.90225 4.68401 3.90225 5.31601 4.29325 5.70701L8.58625 10L4.29325 14.293C3.90225 14.684 3.90225 15.316 4.29325 15.707C4.48825 15.902 4.74425 16 5.00025 16C5.25625 16 5.51225 15.902 5.70725 15.707L10.0002 11.414L14.2933 15.707C14.4882 15.902 14.7443 16 15.0002 16C15.2562 16 15.5122 15.902 15.7072 15.707C16.0982 15.316 16.0982 14.684 15.7072 14.293L11.4142 10Z"
              fill="#434C88"
            />
          </svg>
        </div>
      </template>

      <template v-else>
        <div class="flex">
          <input
            type="file"
            multiple
            name="fields[assetsFieldHandle][]"
            id="assetsFieldHandle"
            class="w-px h-px opacity-0 overflow-hidden absolute"
            ref="file"
            accept=".jpg,.jpeg,.png"
            @change="onSelectImage"
          />

          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M41.1673 4.33331C44.7572 4.33331 47.6673 7.24346 47.6673 10.8333V41.1666C47.6673 44.7565 44.7572 47.6666 41.1673 47.6666H10.834C7.24413 47.6666 4.33398 44.7565 4.33398 41.1666V10.8333C4.33398 7.24346 7.24413 4.33331 10.834 4.33331H41.1673ZM43.334 26.6543L34.3035 40.2018C33.6367 41.202 32.2978 41.4565 31.3177 40.8156L31.1136 40.6645L19.9069 31.3256L11.328 43.3333H41.1674C42.364 43.3333 43.334 42.3633 43.334 41.1666V26.6543ZM41.1673 8.66665H10.834C9.63737 8.66665 8.66732 9.6367 8.66732 10.8333V39.6023L17.7376 26.9073C18.4177 25.9551 19.7162 25.7264 20.6733 26.3444L20.8877 26.5022L32.0354 35.7919L43.334 18.8413V10.8333C43.334 9.6367 42.3639 8.66665 41.1673 8.66665ZM17.334 13C19.7272 13 21.6673 14.9401 21.6673 17.3333C21.6673 19.7265 19.7272 21.6666 17.334 21.6666C14.9407 21.6666 13.0007 19.7265 13.0007 17.3333C13.0007 14.9401 14.9407 13 17.334 13Z"
              fill="#717591"
            />
          </svg>
        </div>

        <div class="mt-5 text-center text-body-2 text-neutral-mid font-semibold">
          Drag & drop file <br />
          or <span class="text-primary">browse media on your device</span>
        </div>
      </template>
    </div>
  </ClientOnly>
</template>

<script>
export default {
  name: 'BaseUpload',

  props: {
    preview: {
      type: String,
    },

    loading: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      file: null,
    };
  },

  computed: {
    _preview: {
      get() {
        return this.preview;
      },

      set(value) {
        this.$emit('update:preview', value);
      },
    },
  },

  methods: {
    onDropFile(event) {
      if (this.loading) {
        return;
      }

      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        this.file = event.dataTransfer.files[0];

        this.readFile();
      }
    },

    removeCurrentImage() {
      this.file = null;
      this._preview = null;
    },

    showUploadFolder() {
      if (this.$refs.file) {
        this.$refs.file.click();
      }
    },

    onSelectImage(event) {
      if (event.target.files && event.target.files.length > 0) {
        this.file = event.target.files[0];

        this.readFile();
      }
    },

    readFile() {
      const reader = new FileReader();

      reader.addEventListener(
        'load',
        () => {
          this.$emit('on-read-file', this.file);
        },
        false,
      );
      reader.readAsDataURL(this.file);
    },
  },
};
</script>
