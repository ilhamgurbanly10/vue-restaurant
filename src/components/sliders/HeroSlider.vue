<script setup lang="ts">

    import type {Hero} from "@/../interfaces/Common";
    import {ref, computed, onMounted} from 'vue';

    const activeIndex = ref<number>(0);
    const pause = ref<boolean>(false);
    const interval = ref<number | null>(null);

    const prev = (): void => {
      activeIndex.value > 0 ? activeIndex.value-- : activeIndex.value = len.value - 1;
    }

    const next = (): void => {
      activeIndex.value < len.value - 1 ? activeIndex.value++ : activeIndex.value = 0;
    }

    const autoplay = (): void => {
      interval.value = setInterval(() => {
        if (!pause.value) next();
      }, 5000)
    }

    const playAgain = (): void => {
      clearInterval(interval.value);
      autoplay();
    }

    onMounted(() => {
      autoplay();
    })

    const { items } = defineProps<{
      items: Hero[]
    }>();

    const len = computed(() => {
      return items.length;
    })

    import {
        RightOutlined,
        LeftOutlined
    } from '@ant-design/icons-vue';

</script>

<template>

    <div class="relative flex w-screen justify-center items-center overflow-hidden" @mouseover="pause = true" @mouseout="pause = false; playAgain()">

      <div v-for="(item, i) in items" :key="i" :class="{ 'active': i == activeIndex}" class="item w-screen h-screen items-center justify-center overflow-hidden text-center relative">
        {{ item?.title }}

        <div class="text-white text-center z-10 overflow-hidden text-container absolute p-10 rounded">

          <h3 class="text-center subtitle relative">{{ item?.subtitle }}</h3>

          <h1 class="text-center mt-5 font-bold font-10 font-lg-18 title relative">{{ item?.title }}</h1>

          <p class="text-center mt-5 description relative font-6 font-lg-8">{{ item?.description }}</p>
          
          <router-link :to="`/view-our-menu/${item?.slug}`">
              <button class="white-btn mt-7 link relative"><span>MENYUMUZA BAXIN</span></button>
          </router-link>

        </div>

        <img :src="item?.img" :alt="item?.title" class="img">

      </div>

      <button class="arrow prev absolute text-white font-10 font-lg-20" @click="prev"><LeftOutlined/></button>
      <button class="arrow next absolute text-white font-10 font-lg-20" @click="next"><RightOutlined/></button>

    </div>

</template>

<style lang="scss" scoped>

  .arrow {
    padding: 0;

    &.prev {
      left: 1rem;
      @media (min-width: 1024px) { left: 2rem }
    }

    &.next {
      right: 1rem;
      @media (min-width: 1024px) { right: 2rem }
    }

  }
  
  .item {

    .text-container {
      background-color: rgba(0,0,0,.5);
      left: 15%;
      width: 70%;

      @media (min-width: 1024px) { left: 25%; width: 50%; }
    }

    overflow: hidden;

    .img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1);
      -webkit-transform: scale(1);
      transition: all 0s !important;
    }

    visibility: hidden;
    position: absolute;
    z-index: -100px;

    .title,
    .subtitle,
    .description,
    .link {
      top: -400px;
      transition: top .5s;
    }

    .title {
      transition-delay: .3s;
    }

    .description {
      transition-delay: .6s;
    }

    .link {
      transition-delay: .9s;
    }
    &.active {
      visibility: visible;
      position: relative;
      display: flex !important;

    .title,
    .subtitle,
    .description,
    .link {
      top: 0px;
    }

      .img {
        transition: all 5s !important;
        transform: scale(1.1);
        -webkit-transform: scale(1.1);
      }
      
    }

  }

</style>