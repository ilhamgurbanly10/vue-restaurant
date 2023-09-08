<script setup lang="ts">

  import { RouterView } from 'vue-router'
  import Header from '@/components/header/Header.vue';
  import Footer from '@/components/footer/Footer.vue';

</script>

<template>

  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />
  
</template>

<style scoped></style>
