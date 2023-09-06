<script setup lang="ts">

import Loader from '@/components/loaders/Loader.vue';

import { defineAsyncComponent } from 'vue';

const OurStory = defineAsyncComponent(() =>
  import('@/components/sections/OurStory.vue')
);

const ViewOurMenu = defineAsyncComponent(() =>
  import('@/components/sections/ViewOurMenu.vue')
);

</script>

<template>
  <Suspense>

    <template #default>
      <OurStory />
    </template>

    <template #fallback>
      <Loader />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <ViewOurMenu />
    </template>

    <template #fallback>
      <Loader />
    </template>

  </Suspense>
</template>

<style src="@/assets/styles/pages/Home.scss" lang="scss" scoped />
