<script setup lang="ts">

    import { ref, onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import HeroSlider from '@/components/sliders/HeroSlider.vue';
    import Loader from '@/components/loaders/Loader.vue';
    import Error from '@/components/errors/Error.vue';
    import type {HeroObj} from '@/../../interfaces/Common';

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed<HeroObj>(() => {
        return store.getters.hero;
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getHero');
        loading.value = false;
    }

    onMounted(() => {
        getData();
    })
    // end-vuex

</script>

<template>

    <section class="w-full">

        <Transition name="to-top">

            <Loader v-if="loading" class="loader" />

            <Error v-else-if="data.error" class="error" />

            <div v-else-if="!loading && !data.error" class="flex flex-col lg:flex-row justify-between">
               <HeroSlider :items="data.data" />
            </div>

        </Transition>

    </section>

</template>

