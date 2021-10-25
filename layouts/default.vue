<template>
  <div class="bg-gray-100 leading-normal tracking-normal h-full min-h-screen">
    <nav id="header" class="fixed w-full z-10 top-0 bg-white" style="box-shadow: 0 1px 1rem rgb(128 128 128 / 20%)">
      <div class="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div class="pl-4">
          <a class="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">
            Solana
          </a>
        </div>

        <div class="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
          >
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
          id="nav-content"
        >
          <ul class="list-reset lg:flex justify-end flex-1 items-center">
            <li class="mr-3">
              <NuxtLink
                :to="{ name: 'blocks' }"
                class="
                  space-x-1
                  text-sm
                  uppercase
                  px-3
                  no-underline 
                  hover:text-gray-900 
                  hover:text-underline
                "
                exact-active-class="bg-neutral-darker after:absolute after:inset-x-0 after:border-b-2 after:border-primary after:-bottom-px"
              >
                <span>Blocks</span>
              </NuxtLink>
            </li>

            <li class="mr-3">
              <NuxtLink
                :to="{ name: 'transactions' }"
                class="
                  space-x-1
                  text-sm
                  uppercase
                  px-3
                  no-underline 
                  hover:text-gray-900 
                  hover:text-underline
                "
                exact-active-class="bg-neutral-darker after:absolute after:inset-x-0 after:border-b-2 after:border-primary after:-bottom-px"
              >
                <span>Transactions</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="w-full md:max-w-4xl mx-auto pt-20 px-4">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>
