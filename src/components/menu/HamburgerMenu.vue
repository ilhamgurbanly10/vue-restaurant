<script setup lang="ts">

    import { ref } from 'vue';
    import type {HamburgerMenuDropdownItems} from '@/../interfaces/MyComponents';
    import HamburgerMenuDropdown from '@/components/dropdowns/HamburgerMenuDropdown.vue';
    
    const show = ref<boolean>(false);
    
    const allMenus: HamburgerMenuDropdownItems[] = [
        {
            title: 'MENYU 1',
            slug: 'menu-1'
        },
        {
            title: 'MENYU 2',
            slug: 'menu-2'
        },
        {
            title: 'MENYU 3',
            slug: 'menu-3'
        },
        {
            title: 'MENYU 4',
            slug: 'menu-4'
        },
        {
            title: 'MENYU 5',
            slug: 'menu-5'
        },
        {
            title: 'MENYU 6',
            slug: 'menu-6'
        },
        {
            title: 'MENYU 7',
            slug: 'menu-6'
        }   
    ]
    
    import {
        BarsOutlined,
        CloseOutlined
    } from '@ant-design/icons-vue';

</script>

<template>
    
    <button type="button" @click="show = !show" class="lg:hidden text-white font-10 opacity-on-hover p-0 flex items-center">
        <BarsOutlined v-if="!show" />
        <CloseOutlined v-else />
    </button>
    
    <div class="absolute w-screen h-auto overflow-auto p-10 flex items-center justify-center lg:hidden" :class="[$style.menu, {[$style.show]: show}]">
        
        <nav class="w-8/12">

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover font-5 px-0 py-3 w-full text-start" :class="$style.link">
                    <span>ANA SƏHİFƏ</span> span
                </button>
            </router-link>
            
            <HamburgerMenuDropdown @click="show = false" title="BÜTÜN MENYULAR" :items="allMenus" :menuShow="show" />

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover font-5 px-0 py-3 w-full text-start" :class="$style.link">
                    <span>RESTORANLAR</span>
                </button>
            </router-link>

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover font-5 px-0 py-3 w-full text-start" :class="$style.link">
                    <span>HAQQIMIZDA</span>
                </button>
            </router-link>

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover font-5 px-0 py-3 w-full text-start" :class="$style.link">
                    <span>ƏLAQƏ</span>
                </button>
            </router-link>

            <router-link to="/">
                <button type="button" @click="show = false" class="opacity-on-hover font-5 px-0 py-3 w-full text-start" :class="$style.link">
                    <span>DİGƏR RESTORANLAR</span>
                </button>
            </router-link>

        </nav>

    </div>

</template>

<style src="@/assets/styles/components/HamburgerMenu.scss" lang="scss" scoped module />interfaces/MyComponents