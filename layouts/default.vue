<template>
  <div class="flex min-h-screen">
    <TheNavBar class="hidden lg:block" />

    <div class="flex-1">
      <TheHeader class="bg-white" />

      <div class="overflow-auto h-(screen-92) lg:h-(screen-108)">
        <PortalTarget name="banner" />

        <main class="container mx-auto mt-10 flex-auto">
          <Nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
};
</script>
