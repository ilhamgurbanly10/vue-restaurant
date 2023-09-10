<script lang="ts" setup>

    import { ref, watch } from 'vue';

    const show = ref<boolean>(false);
    const value = ref<string>('');
    const inputRef = ref<HTMLInputElement | null>(null);

    const onFinish = async (): Promise<void> => {
        show.value = false;
        value.value = '';
    }

    watch(show, () => {
        setTimeout(() => { if(inputRef.value) inputRef.value.focus(); }, 500)
    });

    import {
        SearchOutlined,
    } from '@ant-design/icons-vue';

</script>

<template>

    <button type="button" @click="show = true;" class="text-white font-10 opacity-on-hover btn" :class="{'active': show}">
        <SearchOutlined />
    </button>

    <Teleport to="body">

        <div class="fixed inset-0 flex items-center justify-center" @click="show = false" :class="[$style.container, {[$style.show]: show}]">
            
            <form @click.stop="" class="text-white flex items-center w-10/12 lg:w-4/12">
                
                <label for="filterTitle" class="mr-5 font-bold font-12">Axtar</label>
                <div class="mr-5 w-full">
                    <input ref="inputRef" v-model="value" id="filterTitle" class="w-full" :class="$style.input"/>
                    <div :class="$style.underline"></div>
                </div>
                <button type="button" @click="onFinish()"><SearchOutlined class="font-16 opacity-on-hover" /></button>

            </form>

        </div>

    </Teleport>

</template>

<style src="@/assets/styles/components/TitleFilter.scss" lang="scss" scoped module />
