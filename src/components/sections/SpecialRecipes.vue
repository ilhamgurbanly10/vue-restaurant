<script setup lang="ts">

    import { ref, onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import Loader from '@/components/loaders/Loader.vue';
    import Error from '@/components/errors/Error.vue';
    import RecipeCard from '@/components/cards/RecipeCard.vue';
    import type {SpecialRecipesObj} from '@/../../interfaces/Common';

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed<SpecialRecipesObj>(() => {
        return store.getters.specialRecipes;
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getSpecialRecipes');
        loading.value = false;
    }

    onMounted(() => {
        getData();
    })
    // end-vuex

</script>

<template>

    <section class="main-container mt-10 page-top-spacing">

        <Transition name="to-top">

            <Loader v-if="loading" class="loader" />

            <Error v-else-if="data.error" class="error" />

            
            <div v-else-if="!loading && !data.error">
                
                <h3 class="text-center">{{ data.data?.subtitle }}</h3>

                <h1 class="text-center mt-5 font-bold font-16 font-lg-18">{{ data.data?.title }}</h1>

                <p class="text-center mt-5 lg:w-6/12 lg:mx-auto">{{ data.data?.description }}</p>

                <div class="flex flex-col lg:flex-row justify-between mt-10 pt-5">
                    <RecipeCard v-for="(item, i) in data.data?.data" :key="i" :item="item" :i="i" />
                </div>
                
            </div>

        </Transition>

    </section>

</template>

