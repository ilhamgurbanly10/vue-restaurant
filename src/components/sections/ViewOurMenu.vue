<script setup lang="ts">

    import { ref, onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import IsLoading from '@/components/loaders/IsLoading.vue';
    import ErrorOcurred from '@/components/errors/ErrorOcurred.vue';
    import type {ViewOurMenuObj} from '@/../../interfaces/Common';

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed<ViewOurMenuObj>(() => {
        return store.getters.viewOurMenu;
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getViewOurMenu');
        loading.value = false;
    }

    onMounted(() => {
        getData();
    })
    // end-vuex

</script>

<template>

    <section class="main-container mt-10 bg-grey section-py page-top-spacing">

        <Transition name="to-top">

            <IsLoading v-if="loading" class="loader" />

            <ErrorOcurred v-else-if="data.error" class="error" />

            <div v-else-if="!loading && !data.error" class="flex flex-col lg:flex-row justify-between">

                <div class="full-width lg:w-6/12 lg:pr-4">

                    <h3>{{ data.data?.subtitle }}</h3>

                    <h1 class="mt-5 font-bold font-16 font-lg-18">{{ data.data?.title }}</h1>

                    <p class="mt-5">{{ data.data?.description }}</p>

                    <router-link to="/view-our-menu">
                        <button class="white-btn mt-7"><span>MENYUMUZA BAXIN</span></button>
                    </router-link>

                </div>

                <div class="full-width lg:w-6/12 lgIpl-4 mt-5 pt-5 lg:mt-0 lg:pt-0">
                    <img :src="data.data?.img" :alt="data.data?.title" class="full-width">
                </div>

            </div>

        </Transition>

    </section>

</template>

