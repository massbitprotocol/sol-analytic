<template>
  <div class="bg-gray-100 leading-normal tracking-normal h-full min-h-screen">
    <nav id="header" class="fixed w-full z-10 top-0 bg-white" style="box-shadow: 0 1px 1rem rgb(128 128 128 / 20%)">
      <div class="w-full h-16 md:max-w-5xl mx-auto flex flex-wrap items-center justify-between mt-0">
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
          class="w-full h-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20"
          id="nav-content"
        >
          <ul class="h-full list-reset lg:flex justify-end flex-1 items-center">
            <li v-for="(route, index) in routes" :key="index" class="h-full mr-3">
              <NuxtLink
                :to="{ name: route.path }"
                class="
                  relative
                  h-full
                  flex
                  items-center
                  space-x-1
                  text-base
                  uppercase
                  px-3
                  no-underline 
                  hover:text-gray-900 
                  hover:text-underline
                "
                exact-active-class="after:absolute after:inset-x-0 after:border-b-2 after:border-primary after:-bottom-px"
              >
                <span>{{ route.name }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="w-full md:max-w-5xl mx-auto pt-20 px-4">
      <Nuxt />
    </main>
  </div>
</template>

<script>
const routes = [
  {
    name: 'Blocks',
    path: 'blocks',
  },
  {
    name: 'Transactions',
    path: 'transactions',
  },
  {
    name: 'Tokens',
    path: 'tokens',
  },
  {
    name: 'Charts',
    path: 'charts',
  },
];
export default {
  name: 'LayoutDefault',

  data() {
    return {
      routes,
    };
  },
};
</script>
