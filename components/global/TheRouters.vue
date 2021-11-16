<template>
  <div class="flex flex-col space-y-3">
    <NuxtLink
      class="w-full h-[44px] flex items-center space-x-2 px-5 rounded-lg text-body-2 capitalize text-neutral-darkest "
      exact-active-class="!text-primary font-bold bg-primary-background"
      :to="{ name: 'index' }"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 7.56569V16.6667C17 17.4142 16.4124 18 15.6875 18H13.9375C13.2126 18 12.625 17.4142 12.625 16.6667V12.6667H7.375V16.6464C7.375 17.394 6.78737 18 6.0625 18H4.3125C3.58763 18 3 17.394 3 16.6464V7.56569C3 7.14032 3.19979 6.74048 3.53778 6.4894L9.30438 2.20574C9.72998 1.93142 10.27 1.93142 10.6956 2.20574L16.4622 6.4894C16.8002 6.74048 17 7.14032 17 7.56569Z"
          fill="currentColor"
        />
      </svg>

      <div class="h-[20px]">
        Home
      </div>
    </NuxtLink>

    <NuxtLink
      class="w-full h-[44px] flex items-center space-x-2 px-5 rounded-lg text-body-2 capitalize text-neutral-darkest"
      exact-active-class="!text-primary font-bold bg-primary-background"
      :to="{ name: 'smart-contracts' }"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6 11H14V9H6V11ZM6 15H14V13H6V15ZM6 7H10V5H6V7ZM12 2C12 2 8.27913 2 5.49924 2C4.67081 2 4 2.67157 4 3.5V16.5C4 17.3284 4.67157 18 5.5 18H14.5C15.3284 18 16 17.3284 16 16.5V6L12 2Z"
          fill="currentColor"
        />
      </svg>

      <div class="h-[20px]">
        Smart Contracts
      </div>
    </NuxtLink>

    <NuxtLink
      class="w-full h-[44px] flex items-center space-x-2 px-5 rounded-lg text-body-2 capitalize text-neutral-darkest"
      exact-active-class="!text-primary font-bold bg-primary-background"
      :to="{ name: 'blocks' }"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.5 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V7.5C2.5 7.94203 2.67559 8.36595 2.98816 8.67851C3.30072 8.99107 3.72464 9.16667 4.16667 9.16667H7.5C7.94203 9.16667 8.36595 8.99107 8.67851 8.67851C8.99107 8.36595 9.16667 7.94203 9.16667 7.5V4.16667C9.16667 3.72464 8.99107 3.30072 8.67851 2.98816C8.36595 2.67559 7.94203 2.5 7.5 2.5Z"
          fill="currentColor"
        />
        <path
          d="M15.8333 2.5H12.4999C12.0579 2.5 11.634 2.67559 11.3214 2.98816C11.0088 3.30072 10.8333 3.72464 10.8333 4.16667V7.5C10.8333 7.94203 11.0088 8.36595 11.3214 8.67851C11.634 8.99107 12.0579 9.16667 12.4999 9.16667H15.8333C16.2753 9.16667 16.6992 8.99107 17.0118 8.67851C17.3243 8.36595 17.4999 7.94203 17.4999 7.5V4.16667C17.4999 3.72464 17.3243 3.30072 17.0118 2.98816C16.6992 2.67559 16.2753 2.5 15.8333 2.5Z"
          fill="currentColor"
        />
        <path
          d="M7.5 10.8335H4.16667C3.72464 10.8335 3.30072 11.0091 2.98816 11.3217C2.67559 11.6342 2.5 12.0581 2.5 12.5002V15.8335C2.5 16.2755 2.67559 16.6994 2.98816 17.012C3.30072 17.3246 3.72464 17.5002 4.16667 17.5002H7.5C7.94203 17.5002 8.36595 17.3246 8.67851 17.012C8.99107 16.6994 9.16667 16.2755 9.16667 15.8335V12.5002C9.16667 12.0581 8.99107 11.6342 8.67851 11.3217C8.36595 11.0091 7.94203 10.8335 7.5 10.8335Z"
          fill="currentColor"
        />
        <path
          d="M15.8333 10.8335H12.4999C12.0579 10.8335 11.634 11.0091 11.3214 11.3217C11.0088 11.6342 10.8333 12.0581 10.8333 12.5002V15.8335C10.8333 16.2755 11.0088 16.6994 11.3214 17.012C11.634 17.3246 12.0579 17.5002 12.4999 17.5002H15.8333C16.2753 17.5002 16.6992 17.3246 17.0118 17.012C17.3243 16.6994 17.4999 16.2755 17.4999 15.8335V12.5002C17.4999 12.0581 17.3243 11.6342 17.0118 11.3217C16.6992 11.0091 16.2753 10.8335 15.8333 10.8335Z"
          fill="currentColor"
        />
      </svg>

      <div class="h-[20px]">
        Blocks
      </div>
    </NuxtLink>

    <NuxtLink
      class="w-full h-[44px] flex items-center space-x-2 px-5 rounded-lg text-body-2 capitalize text-neutral-darkest"
      exact-active-class="!text-primary font-bold bg-primary-background"
      :to="{ name: 'tokens' }"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.4941 16.4L13.1996 10.9888L15.9051 16.4H10.4941ZM5.19989 14.8V9.9192C5.84746 10.05 6.51734 10.0186 7.14982 9.82774C7.78231 9.63688 8.35775 9.29249 8.82486 8.82528C9.29197 8.35808 9.63625 7.78256 9.827 7.15002C10.0177 6.51748 10.0491 5.84757 9.91812 5.2H14.7995V10.6112L13.9148 8.8424C13.6436 8.3 12.7556 8.3 12.4836 8.8424L9.50533 14.8H5.19989ZM17.9146 16.8424L16.3995 13.8112C16.3995 10.8075 16.3995 7.80373 16.3995 4.8C16.3995 4.13726 15.8623 3.6 15.1995 3.6C13.1927 3.6 11.1858 3.6 9.17895 3.6C8.44777 2.6344 7.30141 2 5.99986 2C3.79434 2 2 3.7944 2 6C2 7.3016 2.63438 8.4488 3.59994 9.18C3.59994 11.1867 3.59994 13.1933 3.59994 15.2C3.59994 15.8627 4.13718 16.4 4.7999 16.4C6.10172 16.4 7.40354 16.4 8.70536 16.4L8.48377 16.8424C8.42257 16.9644 8.39363 17.1 8.39969 17.2363C8.40576 17.3726 8.44663 17.5051 8.51841 17.6212C8.59019 17.7373 8.69049 17.833 8.80976 17.8993C8.92903 17.9656 9.06329 18.0003 9.19975 18H17.1995C17.3359 18.0004 17.4702 17.9657 17.5895 17.8994C17.7088 17.8331 17.8091 17.7374 17.8808 17.6212C17.9526 17.5051 17.9933 17.3726 17.9992 17.2362C18.0052 17.0999 17.976 16.9643 17.9146 16.8424Z"
          fill="currentColor"
        />
      </svg>

      <div class="h-[20px]">
        Tokens
      </div>
    </NuxtLink>

    <NuxtLink
      class="w-full h-[44px] flex items-center space-x-2 px-5 rounded-lg text-body-2 capitalize text-neutral-darkest"
      exact-active-class="!text-primary font-bold bg-primary-background"
      :to="{ name: 'accounts' }"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.6267 5.75038C13.6267 7.82166 12.003 9.50076 10 9.50076C7.99704 9.50076 6.37333 7.82166 6.37333 5.75038C6.37333 3.6791 7.99704 2 10 2C12.003 2 13.6267 3.6791 13.6267 5.75038Z"
          fill="currentColor"
        />
        <path
          d="M3.57552 13.9724C4.76613 13.0041 7.13563 11.4368 10 11.4368C12.8644 11.4368 15.2339 13.0041 16.4245 13.9724C16.9559 14.4046 17.1217 15.1353 16.9118 15.8L16.6255 16.7069C16.3819 17.4782 15.6863 18 14.9017 18H5.09829C4.31368 18 3.61807 17.4782 3.37452 16.7069L3.08815 15.8C2.87829 15.1353 3.04407 14.4046 3.57552 13.9724Z"
          fill="currentColor"
        />
      </svg>

      <div class="h-[20px]">
        Accounts
      </div>
    </NuxtLink>

    <NuxtLink
      class="w-full h-[44px] flex items-center space-x-2 px-5 rounded-lg text-body-2 capitalize text-neutral-darkest"
      exact-active-class="!text-primary font-bold bg-primary-background"
      :to="{ name: 'charts-statistics' }"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.5 3C14.6716 3 14 3.67157 14 4.5V16.5C14 17.3284 14.6716 18 15.5 18H16.5C17.3284 18 18 17.3284 18 16.5V4.5C18 3.67157 17.3284 3 16.5 3H15.5Z"
          fill="currentColor"
        />
        <path
          d="M8 8.5C8 7.67157 8.67157 7 9.5 7H10.5C11.3284 7 12 7.67157 12 8.5V16.5C12 17.3284 11.3284 18 10.5 18H9.5C8.67157 18 8 17.3284 8 16.5V8.5Z"
          fill="currentColor"
        />
        <path
          d="M2 12.5C2 11.6716 2.67157 11 3.5 11H4.5C5.32843 11 6 11.6716 6 12.5V16.5C6 17.3284 5.32843 18 4.5 18H3.5C2.67157 18 2 17.3284 2 16.5V12.5Z"
          fill="currentColor"
        />
      </svg>

      <div class="h-[20px]">
        Charts & Statistics
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name:'TheRouters'
}
</script>
