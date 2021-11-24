<template>
  <BaseGhostBlock class="h-full">
    <table v-if="loading" class="table-auto">
      <colgroup>
        <col span="1" width="220" />
        <col span="1" />
      </colgroup>

      <tbody>
        <!-- Title -->
        <tr class="w-full">
          <td class="font-bold text-body-1 text-neutral-darkest whitespace-nowrap">Profile Summary</td>
          <td>
            <div class="w-96 h-5 bg-neutral-white"></div>
          </td>
        </tr>

        <tr class="w-full">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">
            <div class="w-full h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
          </td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">
            <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
          </td>
        </tr>

        <tr class="w-full">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">
            <div class="w-full h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
          </td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">
            <div class="w-64 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
          </td>
        </tr>

        <tr class="w-full">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">
            <div class="w-full h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
          </td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">
            <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
          </td>
        </tr>

        <tr class="w-full">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">
            <div class="w-full h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
          </td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">
            <div class="w-96 h-5 animate-pulse bg-neutral-lighter rounded-full"></div>
          </td>
        </tr>
      </tbody>
    </table>

    <table v-else class="w-full">
      <colgroup>
        <col span="1" width="220" />
        <col span="1" />
      </colgroup>

      <tbody>
        <!-- Title -->
        <tr>
          <td class="font-bold text-body-1 text-neutral-darkest whitespace-nowrap">Profile Summary</td>
          <td></td>
        </tr>

        <!-- Name -->
        <tr v-if="name">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Token name</td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">{{ name }}</td>
        </tr>

        <!-- Address -->
        <tr v-if="address">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Token address</td>
          <td class="relative max-w-0 py-3 text-body-2 text-neutral-darkest font-medium">
            <div class="w-full inline-flex items-center justify-items-start gap-2">
              <div class="overflow-ellipsis whitespace-nowrap break-words overflow-hidden">
                {{ address }}
              </div>

              <TheCopyButton buttonClass="bg-primary-background" :textToCopy="address" />
            </div>
          </td>
        </tr>

        <!-- Owner Program -->
        <tr v-if="ownerProgram">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Owner Program</td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">{{ ownerProgram }}</td>
        </tr>

        <!-- Decimals -->
        <tr v-if="decimals">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Decimals</td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">{{ decimals }}</td>
        </tr>
      </tbody>
    </table>
  </BaseGhostBlock>
</template>

<script>
export default {
  name: 'TokensDetailProfileSummary',

  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    token: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    name() {
      return this.token.name || null;
    },

    address() {
      return this.token.address || null;
    },

    ownerProgram() {
      return this.token.ownerProgram || null;
    },

    decimals() {
      return this.token.decimals || null;
    },
  },
};
</script>
