<script setup lang="ts">

import IsLoading from '@/components/loaders/IsLoading.vue';

import { defineAsyncComponent, onMounted } from 'vue';

const HeroSection = defineAsyncComponent(() =>
  import('@/components/sections/HeroSection.vue')
);

const OurStory = defineAsyncComponent(() =>
  import('@/components/sections/OurStory.vue')
);

const ViewOurMenu = defineAsyncComponent(() =>
  import('@/components/sections/ViewOurMenu.vue')
);

const CommentsSection = defineAsyncComponent(() =>
  import('@/components/sections/CommentsSection.vue')
);

const SelectionsSection = defineAsyncComponent(() =>
  import('@/components/sections/SelectionsSection.vue')
);

const SpecialRecipes = defineAsyncComponent(() =>
  import('@/components/sections/SpecialRecipes.vue')
);

</script>

<template>

  <Suspense>

    <template #default>
      <HeroSection />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <OurStory />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <ViewOurMenu />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <CommentsSection />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <SelectionsSection />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <SpecialRecipes />
    </template>

    <template #fallback>
      <IsLoading />
    </template>

  </Suspense>
  
</template>

<style src="@/assets/styles/pages/Home.scss" lang="scss" scoped />
