<template>
  <div class="flex min-h-screen">
    <TheNavBar class="hidden lg:block" />

    <div class="flex-1">
      <TheHeader class="bg-white" />

      <main class="container mx-auto mt-10 flex-auto">
        <Nuxt />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>
