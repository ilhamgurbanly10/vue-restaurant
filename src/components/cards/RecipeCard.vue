<script setup lang="ts">

    import type { SpecialRecipe } from "@/../interfaces/Common";

    defineProps<{
        item: SpecialRecipe,
        i: number
    }>()

</script>

<template>

    <div :class="{ 'mt-5 lg:mt-0': i != 0, 'lg:pr-4 ': i == 0, 'lg:pl-4 lg:pr-4': i == 1, 'lg:pl-4': i == 2 }" class="full-width lg:w-4/12 card-underline">

        <router-link :to="`/recipes/${item?.slug}`">
            <div class="cover-bg-img img-overlay-on-hover">
                <img :src="item?.img" :alt="item?.title">
            </div>
        </router-link>

        <h6 class="mt-5" v-text="item?.date"></h6>

        <router-link :to="`/recipes/${item?.slug}`">
            <h1 class="mt-5 font-bold font-10 font-lg-12 truncate" v-text="item?.title"></h1>
        </router-link>

        <p class="mt-5 text-gray-400" v-text="item?.description"></p>

        <router-link to="/recipes">
            <p class="mt-5 text-gray-400">{{ item?.comment_count }} Şərh</p>
        </router-link>

        <div class="underline"></div>

    </div>

</template>