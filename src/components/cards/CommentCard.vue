<script setup lang="ts">

    import {Comment} from "@/../interfaces/Common";

    defineProps < {
      item: Comment[]
    } > ()

</script>

<template>

    <div class="full-width text-white flex flex-col text-center items-center">

        <img :src="item?.img" :alt="item.name">

        <p v-text="item.comment" class="mt-8 full-width lg:w-8/12 font-10 text-center"></p>

        <h3 v-text="item.name" class="mt-8 full-width lg:w-8/12 text-center"></h3>

    </div>

</template>