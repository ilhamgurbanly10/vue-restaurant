<script setup lang="ts">

    import { ref } from 'vue';
    import type {HamburgerMenuDropdownItems} from '@/../interfaces/MyComponents';

    const { title, items } = defineProps<{
      title: string,
      items: HamburgerMenuDropdownItems[]
    }>();

    const show = ref<boolean>(false);

    import {
        RightOutlined,
        DownOutlined
    } from '@ant-design/icons-vue';

</script>

<template>

    <div>

        <button type="button" @click.stop="show = !show" class="font-5 px-0 py-3 w-full text-start flex justify-between" :class="[$style.link, {[$style.active]: show}]">
            <span v-text="title"></span> 
            <span class="mr-3">
                <RightOutlined v-if="!show" />
                <DownOutlined v-else />
            </span>
        </button>

        <div :class="{'block': show, 'hidden': !show}"  class="pl-8 py-1">
            <ul>
                <li v-for="(item, i) in items" :key="i" >
                    <router-link :to="`/our-menus/${item?.slug}`">
                        <span class="opacity-on-hover font-5 px-0 py-3 w-full text-start flex justify-between" :class="$style.link">{{ item?.title }}</span>
                    </router-link>
                </li>
            </ul>
        </div>

    </div>

</template>

<style src="@/assets/styles/components/HamburgerMenu.scss" lang="scss" scoped module />