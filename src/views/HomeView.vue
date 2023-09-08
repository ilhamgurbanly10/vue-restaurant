<script setup lang="ts">

import Loader from '@/components/loaders/Loader.vue';

import { defineAsyncComponent, onMounted } from 'vue';

const Hero = defineAsyncComponent(() =>
  import('@/components/sections/Hero.vue')
);

const OurStory = defineAsyncComponent(() =>
  import('@/components/sections/OurStory.vue')
);

const ViewOurMenu = defineAsyncComponent(() =>
  import('@/components/sections/ViewOurMenu.vue')
);

const Comments = defineAsyncComponent(() =>
  import('@/components/sections/Comments.vue')
);

const Selections = defineAsyncComponent(() =>
  import('@/components/sections/Selections.vue')
);

const SpecialRecipes = defineAsyncComponent(() =>
  import('@/components/sections/SpecialRecipes.vue')
);

</script>

<template>

  <Suspense>

    <template #default>
      <Hero />
    </template>

    <template #fallback>
      <Loader />
    </template>

  </Suspense>

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

  <Suspense>

    <template #default>
      <Comments />
    </template>

    <template #fallback>
      <Loader />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <Selections />
    </template>

    <template #fallback>
      <Loader />
    </template>

  </Suspense>

  <Suspense>

    <template #default>
      <SpecialRecipes />
    </template>

    <template #fallback>
      <Loader />
    </template>

  </Suspense>
  
</template>

<style src="@/assets/styles/pages/Home.scss" lang="scss" scoped />
