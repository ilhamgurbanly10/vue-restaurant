<script setup lang="ts">

    import { ref, onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import Loader from '@/components/loaders/Loader.vue';
    import Error from '@/components/errors/Error.vue';

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed(() => {
        return store.getters.ourStory;
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getOurStory');
        loading.value = false;
    }

    onMounted(() => {
        getData();
    })
    // end-vuex

</script>

<template>

    <section class="main-container page-top-spacing">

        <Loader v-if="loading" />

        <Error v-else-if="data.error" />

        <div v-else-if="!loading && !data.error">

            <h3 class="text-center">{{ data.data?.subtitle }}</h3>

            <h1 class="text-center mt-5 font-bold font-16 font-lg-18">{{ data.data?.title }}</h1>

            <p class="text-center mt-5 lg:w-6/12 lg:mx-auto">{{ data.data?.description }}</p>

            <div class="flex flex-col lg:flex-row justify-between mt-7 pt-5">
                <img :src="data.data?.first_image" :alt="data.data?.title" class="full-width lg:w-6/12 lg:pr-4">
                <img :src="data.data?.second_image" :alt="data.data?.title" class="full-width lg:w-6/12 mt-5 lg:mt-0 lg:pl-4">
            </div>

        </div>
        
    </section>

</template>

<style src="@/assets/styles/components/OurStory.scss" lang="scss" scoped />
