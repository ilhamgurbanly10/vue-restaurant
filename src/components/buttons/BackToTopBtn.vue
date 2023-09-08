<script setup lang="ts">

    import { ref, onMounted, onUnmounted } from 'vue';

    const active = ref<boolean>(false);
    const btn = ref<JSX.Element | null>(null)
    
    const toggle = () => document.documentElement.scrollTop > 100 ? active.value = true : active.value = false;
    const hide = (): void => { active.value = false; }
    const toTop = (): void => { document.documentElement.scrollTop = 0; }

    onMounted(() => {
        btn?.value?.addEventListener('click', hide);
        btn?.value?.addEventListener('click', toTop);
        window.addEventListener('scroll', toggle);
        toggle();
    })

    onUnmounted(() => {
        btn?.value?.removeEventListener('click', hide);
        btn?.value?.removeEventListener('click', toTop);
        window.removeEventListener('scroll', toggle);
    })

    import {
        UpOutlined
    } from '@ant-design/icons-vue';

</script>

<template>

    <button ref="btn" class="fixed btn flex rounded overflow-hidden items-center justify-center" :class="{'active': active}">
        <div class="icon relative flex items-center justify-center"><UpOutlined /></div>
        <div class="box"></div>
    </button>

</template>

<style lang="scss" scoped>

    @import '@/assets/styles/scss/colors.scss';

    .btn {
        right: 2rem;
        bottom: -100px;
        transition: all .3s;
        z-index: 999999999;
        background-color: $purple !important;
        color: white;
        width: 40px;
        height: 40px;

        .icon {
            z-index: 5;
        }
        .box {
            height: 0;
            width: 0;
            background-color: $lightPurple;
            transition: all .3s;
            position: absolute;
        }

        &:is(:hover,:active) {
            .box {
                height: 100%;
                width: 100%;
            }

        }
        &.active {
            bottom: 2rem; 
        }

       

        

    }

</style>