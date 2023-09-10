<script setup lang="ts">

    import { ref } from 'vue';

    const show = ref<boolean>(false);

    import {
        BarsOutlined,
        CloseOutlined,
        WhatsAppOutlined,
        FacebookFilled,
        InstagramOutlined,
        YoutubeOutlined,
        MailFilled
    } from '@ant-design/icons-vue';

</script>

<template>

    <button type="button" @click="show = true" class="hidden lg:block text-white font-10 opacity-on-hover">
        <BarsOutlined />
    </button>

    <Teleport to="body">

        <div :class="[$style.container, { [$style.show]: show}]" class="relative">

            <div :class="$style.content" @click.stop="" class="p-10">

                <button type="button" @click="show = false" class="text-white mr-5 font-10 p-0 grow-on-hover grow-on-hover absolute right-5">
                    <CloseOutlined />
                </button>

                <div class="section-py flex flex-col items-start justify-between">
            
                    <h3 class="text-white text-start w-full">
                        LƏZZİZ YEMƏKLƏR
                    </h3>

                    <h3 class="text-white text-start mt-5 w-full">
                        
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>

                        <p class="mt-4">+185648592569</p>

                        <p class="mt-4">ilhamgurbanly@gmail.com</p>

                        <p class="mt-4">Eighth Avenue 487, Baku</p>
                    
                        <div class="flex items-center justify-start mt-5">

                            <a href="#" class="white-iconic-btn mr-5">
                                <WhatsAppOutlined class="" />
                            </a>

                            <a href="#" class="white-iconic-btn mr-5">
                                <FacebookFilled class="" />
                            </a>

                            <a href="#" class="white-iconic-btn mr-5">
                                <InstagramOutlined class="" />
                            </a>

                            <a href="#" class="white-iconic-btn mr-5">
                                <YoutubeOutlined class="" />
                            </a>

                            <a href="#" class="white-iconic-btn">
                                <MailFilled class="" />
                            </a>

                        </div>

                    </h3>

                    <h3 class="text-white text-start mt-5 w-full">
                        SAĞLAM QİDALAR
                    </h3>

                </div>

                <div class="text-gray-400 font-7 text-start">
                    © 2023 By Ilham Gurbanly, All Rights Reserved
                </div>

            </div>
            
            <div @click="show = false" :class="$style.overlay"></div>
        
        </div>

    </Teleport>

</template>

<style src="@/assets/styles/components/OffcanvasComponent.scss" lang="scss" scoped module />
    
