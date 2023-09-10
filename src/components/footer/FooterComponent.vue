<script setup lang="ts">

import {
    WhatsAppOutlined,
    FacebookFilled,
    InstagramOutlined,
    YoutubeOutlined,
    MailFilled
} from '@ant-design/icons-vue';

</script>

<template>

    <footer class="main-container page-top-spacing">

        <div class="section-py flex flex-col lg:flex-row items-start justify-between">
            
            <h3 class="text-white text-center w-full lg:w-3/12">
                LƏZZİZ YEMƏKLƏR
            </h3>

            <h3 class="text-white text-center mt-5 lg:mt-0 w-full lg:w-3/12">
                
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>

                <p class="mt-4">+185648592569</p>

                <p class="mt-4">ilhamgurbanly@gmail.com</p>

                <p class="mt-4">Eighth Avenue 487, Baku</p>
              
                <div class="flex items-center justify-center mt-5">

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

            <h3 class="text-white text-center mt-5 lg:mt-0 w-full lg:w-3/12">
                SAĞLAM QİDALAR
            </h3>

        </div>

        <div class="p-5 text-gray-400 font-7 text-center">
            © 2023 By Ilham Gurbanly, All Rights Reserved
        </div>
        
    </footer>

</template>

<style src="@/assets/styles/components/Footer.scss" lang="scss" scoped />