<script setup lang="ts">

    import { ref, onMounted, computed } from 'vue';
    import { useStore } from 'vuex';
    import Loader from '@/components/loaders/Loader.vue';
    import Error from '@/components/errors/Error.vue';
    import Slider from '@/components/sliders/Slider.vue';
    import CommentCard from '@/components/cards/CommentCard.vue';
    import {CommentsObj} from '@/../interfaces/Common';
    import { SwiperSlide } from 'vue-awesome-swiper'

    // vuex
    const store = useStore();

    const loading = ref<boolean>(false);

    const data = computed<CommentsObj>(() => {
        return store.getters.comments;
    });

    const bgUrl = computed<string>(() => {
        return "url(" + store.getters.comments?.data?.bg_img + ")";
    });

    const getData = async (): Promise<void> => {
        loading.value = true;
        await store.dispatch('getComments');
        loading.value = false;
    }

    onMounted(() => {
        getData();
    })
    // end-vuex

</script>

<template>

    <section class="main-container bg-grey section-py page-top-spacing bg-img" :style="{ backgroundImage: bgUrl}">

        <Transition name="to-top">

            <Loader v-if="loading" class="loader" />

            <Error v-else-if="data.error" class="error" />

            <div v-else-if="!loading && !data.error">
                 
                <div class="full-width swiper-white-dots">

                    <Slider>
                        <swiper-slide v-for="(item, index) in data.data?.comments" :key="index">
                           <CommentCard :item="item" />
                        </swiper-slide> 
                    </Slider>

                </div>

            </div>

        </Transition>

    </section>

</template>

<style src="@/assets/styles/components/OurStory.scss" lang="scss" scoped />
