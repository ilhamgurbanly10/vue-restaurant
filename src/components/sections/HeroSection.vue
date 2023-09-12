<script setup lang="ts">

    import { ref, onMounted, computed } from 'vue';
    //@ts-ignore
    import { useStore } from 'vuex';
    import HeroSlider from '@/components/sliders/HeroSlider.vue';
    import IsLoading from '@/components/loaders/IsLoading.vue';
    import ErrorOcurred from '@/components/errors/ErrorOcurred.vue';
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

            <IsLoading v-if="loading" class="loader" />

            <ErrorOcurred v-else-if="data.error" class="error" />

            <div v-else-if="!loading && !data.error" class="flex flex-col lg:flex-row justify-between">
               <HeroSlider :items="data.data" />
            </div>

        </Transition>

    </section>

</template>

