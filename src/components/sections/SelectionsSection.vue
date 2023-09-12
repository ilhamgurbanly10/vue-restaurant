<script setup lang="ts">

    import { ref, onMounted, computed, watch } from 'vue';
    //@ts-ignore
    import { useStore } from 'vuex';
    import IsLoading from '@/components/loaders/IsLoading.vue';
    import ErrorOcurred from '@/components/errors/ErrorOcurred.vue';
    import type {SelectionsObj} from '@/../../interfaces/Common';

    const active = ref<string>('');
    const activeIndex = ref<number>(0);
    const lastActiveIndex = ref<number>(0);
    const btnHeight = ref<number>(50);

    const topOffset = computed<string>(() => {
        return `${activeIndex.value * btnHeight.value}px`;
    });

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed<SelectionsObj>(() => {
        return store.getters.selections;
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getSelections');
        loading.value = false;
    }

    onMounted(() => {
        getData();
    })
    // end-vuex

    watch(data, (newData) => {
        if (newData.data?.data.length) {
            active.value = newData.data.data[0].key;
        }
    });

</script>

<template>

    <section class="main-container mt-10 page-top-spacing">

        <Transition name="to-top">

            <IsLoading v-if="loading" class="loader" />

            <ErrorOcurred v-else-if="data.error" class="error" />
            
            <div v-else-if="!loading && !data.error" class="flex flex-col lg:flex-row justify-between">
                
                <div class="flex flex-col full-wdith lg:w-3/12 items-start relative">

                    <button v-for="(item, i) in data.data?.buttons" :key="i" @click="active = item.value; activeIndex = i; lastActiveIndex = i;" @mouseover="activeIndex = i" @mouseout="activeIndex = lastActiveIndex" class="btn full-width" v-text="item.value" :class="{ 'active': item.value === active}"></button>
                    
                    <div class="indicator absolute right-0">
                        <div class="line absolute left-0" :style="{ top: topOffset}"></div>
                    </div>

                </div>

                <div class="full-wdith lg:w-9/12 lg:pl-8">
                    
                    <TransitionGroup name="to-top-sm">

                        <div v-for="(item, i) in data.data?.data" v-show="active === item.key" :key="i" :class="{ 'active': item.key === active}" class="flex flex-col lg:flex-row items-start justify-between mt-5 lg:mt-0">
                            
                            <div class="full-width lg:w-8/12">

                                <h2 v-text="item.title" class="font-9 font-lg-14 font-bold"></h2>

                                <p v-text="item.text" class="mt-5 text-gray-500"></p>

                            </div>

                            <img :src="item.img" :alt="item.title" class="full-width lg:w-4/12">

                        </div>

                    </TransitionGroup>
                    
                </div>

            </div>

        </Transition>

    </section>

</template>

<style lang="scss" scoped>

    @import '@/assets/styles/scss/colors.scss';

    .btn {
        height: 50px;
        line-height: 50px;
        padding: 0 !important;
        width: 100%;
        margin: 0;
        text-align: left;

        &.active {
            font-weight: bold;
        }
    }

    .indicator {

        width: 2px;
        height: 100%;
        background-color: $grey;
        .line {
            left: 0;
            background-color: $purple !important;
            height: 50px;
            width: 2px;
            transition: top .3s;
        }

    }

</style>

