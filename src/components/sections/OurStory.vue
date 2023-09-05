<script setup lang="ts">

    import { ref, onMounted, computed } from 'vue';
    import { useStore } from 'vuex';

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
        getData()
    })
    // end-vuex

</script>

<template>
    
    <p v-if="loading">Yüklənir...</p>
    <p v-if="data.error">Xəta baş verdi</p>
    {{data.data?.title}}

</template>

<style src="@/assets/styles/components/OurStory.scss" lang="scss" scoped />
