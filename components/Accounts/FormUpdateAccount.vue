<template>
  <ValidationObserver v-slot="{ handleSubmit, invalid }" tag="div">
    <div class="mt-7.5 uppercase text-heading-2 font-bold text-neutral-darkest">Basic Details</div>

    <!-- Title -->
    <div class="text-body-2 text-neutral-normal font-medium">
      Your profile is public, update your details to show our community who you are
    </div>

    <form class="w-full max-w-screen-sm" @submit.prevent="handleSubmit(updateAccount)">
      <!-- Avatar -->
      <div class="flex flex-col md:flex-row text-center md:text-left items-center gap-4 mt-5">
        <!-- Upload file -->
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

        <img
          class="rounded-full object-cover object-center"
          style="max-width: 120px; min-width: 120px; min-height: 120px; max-height: 120px"
          :src="form.image"
        />

        <div class="flex flex-col items-center md:items-start">
          <div class="text-body-1 text-neutral-darkest font-medium">Your Avatar</div>

          <div class="text-body-2 text-neutral-normal font-medium">
            We recommend an image of at least 400x400.<br />
            Gifs work too.
          </div>

          <BaseButton class="mt-3 px-3 h-[32px]" :loading="loadingUploadImage" @click="showUploadFolder">
            <span class="text-caption text-neutral-white font-medium"> Choose file </span>
          </BaseButton>
        </div>
      </div>

      <!-- Display Name -->
      <ValidationProvider v-slot="{ errors }" rules="required" name="display Name" tag="div" class="w-full mt-7.5">
        <div>
          <label class="block text-body-1 text-neutral-darkest font-semibold tracking-wide mb-2" for="grid-name">
            Display Name
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            id="grid-name"
            v-model.trim="form.name"
            type="text"
            placeholder="Your display name"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <!-- Email -->
      <ValidationProvider v-slot="{ errors }" rules="required" name="email" tag="div" class="w-full mt-7.5">
        <div>
          <label class="block text-body-1 text-neutral-darkest font-semibold tracking-wide mb-2" for="grid-email">
            Email
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            id="grid-email"
            v-model.trim="form.email"
            type="text"
            placeholder="Your display email"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <!-- Change Password -->
      <div class="mt-7.5 uppercase text-heading-2 font-bold text-neutral-darkest">Change Password</div>

      <!-- Old Password -->
      <ValidationProvider v-slot="{ errors }" rules="required" name="old password" tag="div" class="w-full mt-4">
        <div>
          <label
            class="block text-body-1 text-neutral-darkest font-semibold tracking-wide mb-2"
            for="grid-old-password"
          >
            Old Password
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            id="grid-old-password"
            v-model.trim="form.oldPassword"
            type="text"
            placeholder="Your old password"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <!-- New Password -->
      <ValidationProvider v-slot="{ errors }" rules="required" name="new password" tag="div" class="w-full mt-7.5">
        <div>
          <label
            class="block text-body-1 text-neutral-darkest font-semibold tracking-wide mb-2"
            for="grid-new-password"
          >
            New Password
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            id="grid-new-password"
            v-model.trim="form.newPassword"
            type="text"
            placeholder="New password"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <!-- Confirm New Password -->
      <ValidationProvider
        v-slot="{ errors }"
        rules="required"
        name="confirm new password"
        tag="div"
        class="w-full mt-7.5"
      >
        <div>
          <label
            class="block text-body-1 text-neutral-darkest font-semibold tracking-wide mb-2"
            for="grid-confirm-new-password"
          >
            Confirm New Password
          </label>

          <input
            class="
              appearance-none
              block
              w-full
              text-body-2 text-gray-700
              border border-primary-background
              rounded
              py-3
              px-4
              mb-2.5
              leading-tight
            "
            id="grid-confirm-new-password"
            v-model.trim="form.confirmNewPassword"
            type="text"
            placeholder="Confirm password"
          />
          <p v-if="errors[0]" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
        </div>
      </ValidationProvider>

      <!-- Submit -->
      <BaseSecondaryButton
        v-if="invalid"
        class="w-full md:w-auto h-[52px] mt-10"
        type="submit"
        :disabled="true"
        :loading="loading"
      >
        Save Change
      </BaseSecondaryButton>
      <BaseButton v-else class="w-full md:w-auto h-[52px] mt-10" type="submit" :loading="loading">
        Save Change
      </BaseButton>
    </form>
  </ValidationObserver>
</template>

<script>
export default {
  name: 'AccountsFormUpdateAccount',

  data() {
    return {
      loading: false,
      loadingUploadImage: false,

      form: {
        name: '',
        email: '',
        image: 'https://storage.googleapis.com/massbit/985874ac-830a-48d0-b1d7-d748b13bdf6c.png',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
    };
  },

  methods: {
    updateAccount() {
      console.log('updateAccount');
    },

    showUploadFolder() {
      if (this.$refs.file) {
        this.$refs.file.click();
      }
    },

    onSelectImage(event) {
      if (event.target.files && event.target.files.length > 0) {
        const file = event.target.files[0];
        console.log('file :>> ', file);
      }
    },
  },
};
</script>
