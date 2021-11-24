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
          <td class="font-bold text-body-1 text-neutral-darkest whitespace-nowrap">Market Overview</td>
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
          <td class="font-bold text-body-1 text-neutral-darkest whitespace-nowrap">Market Overview</td>
          <td></td>
        </tr>

        <!-- Price -->
        <tr v-if="price">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Price</td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">${{ price }}</td>
        </tr>

        <!-- Fully Dilluted Market Cap -->
        <tr v-if="marketCap">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">
            Fully Dilluted Market Cap
          </td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">{{ marketCap }}</td>
        </tr>

        <!-- Max Total Supply -->
        <tr v-if="maxTotalSupply">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Max Total Supply</td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">
            {{ maxTotalSupply | formatPrice }}
          </td>
        </tr>

        <!-- Holders -->
        <tr v-if="holder">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Holders</td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">
            {{ holder }}
          </td>
        </tr>

        <!-- Website -->
        <tr v-if="website">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Website</td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">
            <a class="text-primary" :href="website" target="_blank" rel="noopener noreferrer">
              {{ website }}
            </a>
          </td>
        </tr>

        <!-- Social Channels -->
        <tr v-if="channels.length > 0">
          <td class="text-body-2 text-neutral-normal font-medium pr-20 py-3 whitespace-nowrap">Social Channels</td>
          <td class="py-3 text-body-2 text-neutral-darkest font-medium">
            <div class="flex items-center gap-3">
              <div v-for="channel in channels" :key="channel.key">
                <!-- twitter -->
                <a
                  v-if="channel.key === 'twitter'"
                  class="w-[24px] h-[24px]"
                  :href="channel.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="twitter"
                    width="24"
                    height="24"
                    fill="#1890FA"
                    aria-hidden="true"
                  >
                    <path
                      d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"
                    ></path>
                  </svg>
                </a>

                <!-- Coingecko -->
                <a
                  v-if="channel.key === 'coingeckoId'"
                  class="w-[24px] h-[24px]"
                  :href="`https://www.coingecko.com/en/coins/${channel.id}`"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <circle cx="12" cy="12" r="12" fill="url(#pattern0)" />
                    <defs>
                      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_421_34005" transform="scale(0.015625)" />
                      </pattern>
                      <image
                        id="image0_421_34005"
                        width="64"
                        height="64"
                        xlink:href="data:image/png;base64,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"
                      />
                    </defs>
                  </svg>
                </a>

                <!-- discord -->
                <a
                  v-if="channel.key === 'discord'"
                  class="w-[24px] h-[24px]"
                  :href="channel.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg class="w-[24px]" viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                      <path
                        d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                        fill="#5865F2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="71" height="55" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </BaseGhostBlock>
</template>

<script>
export default {
  name: 'TokensDetailMarketOverview',

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
    price() {
      return this.token.tokenInfo && this.token.tokenInfo.price ? this.token.tokenInfo.price : null;
    },

    marketCap() {
      if (this.maxTotalSupply && this.price) {
        const formatter = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        });

        return formatter.format(this.maxTotalSupply * this.price);
      }

      return null;
    },

    maxTotalSupply() {
      if (this.token.tokenInfo && this.token.tokenInfo.supply) {
        return (parseInt(this.token.tokenInfo.supply) / 1000000).toFixed(2);
      }

      return null;
    },

    holder() {
      if (this.token.holder && this.token.holder) {
        return parseInt(this.token.holder);
      }

      return null;
    },

    website() {
      if (this.token.website && this.token.website) {
        return this.token.website;
      }

      return null;
    },

    channels() {
      const channels = [];
      const acceiptChannelKeys = ['twitter', 'coingeckoId', 'discord'];

      if (this.token.extensions && Object.keys(this.token.extensions).length > 0) {
        for (const key in this.token.extensions) {
          const extension = this.token.extensions[key];
          if (acceiptChannelKeys.includes(key)) {
            channels.push({ key, id: extension });
          }
        }
      }

      return channels;
    },
  },
};
</script>
