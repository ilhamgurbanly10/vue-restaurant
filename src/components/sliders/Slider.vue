<template>
    
    <swiper 
        :autoplay="{ delay: 4000, disableOnInteraction: true }" 
        :pagination="{ clickable: true, el: '.outside-swiper-pagination' }"
        :allow-touch-move="true"
        :slides-per-view="1"
    >        
        <slot></slot>
    </swiper>

    <div class="outside-swiper-pagination flex justify-center items-center mt-7"></div>

</template>

<script setup lang="ts">

    import SwiperClass, { Pagination } from 'Swiper'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

    // import swiper module styles
    import 'swiper/css'
    import 'swiper/css/pagination'

</script>