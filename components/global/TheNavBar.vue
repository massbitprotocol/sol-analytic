<template>
  <div class="w-[274px] border-r border-r-primary-background">
    <div class="flex items-center p-5 h-[72px] lg:h-[88px]">
      <TheLogoDark />
    </div>

    <div class="h-(screen-92) lg:h-(screen-108) flex flex-col justify-between overflow-auto p-5 pt-10">
      <TheRouters />

      <TheFooter class="mt-15" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavBar',
};
</script>
