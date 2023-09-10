<script setup lang="ts">

    import BackToTopBtn from '@/components/buttons/BackToTopBtn.vue';
    import TitleFilter from '@/components/filters/TitleFilter.vue';
    import OffcanvasComponent from '@/components/offcanvases/OffcanvasComponent.vue';
    import HamburgerMenu from '@/components/menu/HamburgerMenu.vue';


</script>

<template>

    <header class="main-container-2 absolute top-0 py-10">
        
        <div class="flex items-center justify-between">

            <KeepAlive>
                <HamburgerMenu />
            </KeepAlive>

            <router-link to="/">
                <h1 class="text-white font-bold font-10">VUE RESTAURANT</h1>
            </router-link>

            <nav class="lg:flex lg:items-center hidden">

                <router-link to="/">
                    <span class="text-white font-7 white-link mr-5 opacity-on-hover">ANA SƏHİFƏ</span>
                </router-link>

                <router-link to="/">

                    <div :class="$style.dropdown" class="relative">

                        <span class="text-white font-7 white-link mr-5 opacity-on-hover">BÜTÜN MENYULAR</span>
                    
                        <div :class="$style.dropdownContainer" class="absolute px-5 py-8">

                            <ul :class="$style.dropdownList">

                                <li :class="$style.dropdownList">
                                    <router-link to="/">
                                        <span class="text-white font-7 white-link opacity-on-hover">MENYU 1</span>
                                    </router-link>
                                </li>

                                <li :class="$style.dropdownList" class="mt-4">
                                    <router-link to="/">
                                        <span class="text-white font-7 white-link opacity-on-hover">MENYU 2</span>
                                    </router-link>
                                </li>

                                <li :class="$style.dropdownList" class="mt-4">
                                    <router-link to="/">
                                        <span class="text-white font-7 white-link opacity-on-hover">MENYU 3</span>
                                    </router-link>
                                </li>

                                <li :class="$style.dropdownList" class="mt-4">
                                    <router-link to="/">
                                        <span class="text-white font-7 white-link opacity-on-hover">MENYU 4</span>
                                    </router-link>
                                </li>

                                <li :class="$style.dropdownList" class="mt-4">
                                    <router-link to="/">
                                        <span class="text-white font-7 white-link opacity-on-hover">MENYU 5</span>
                                    </router-link>
                                </li>

                                <li :class="$style.dropdownList" class="mt-4">
                                    <router-link to="/">
                                        <span class="text-white font-7 white-link opacity-on-hover">MENYU 6</span>
                                    </router-link>
                                </li>

                                <li :class="$style.dropdownList" class="mt-4">
                                    <router-link to="/">
                                        <span class="text-white font-7 white-link opacity-on-hover">MENYU 7</span>
                                    </router-link>
                                </li>

                            </ul>

                        </div>

                    </div>

                </router-link>

                <router-link to="/">
                    <span class="text-white font-7 white-link mr-5 opacity-on-hover">RESTORANLAR</span>
                </router-link>

                <router-link to="/">
                    <span class="text-white font-7 white-link mr-5 opacity-on-hover">HAQQIMIZDA</span>
                </router-link>

                <router-link to="/">
                    <span class="text-white font-7 white-link opacity-on-hover mr-5">ƏLAQƏ</span>
                </router-link>

                <router-link to="/">
                    <span class="text-white font-7 white-link opacity-on-hover">DİGƏR RESTORANLAR</span>
                </router-link>

            </nav>

            <div class="flex items-center justify-end lg:w-1/12">

                <div class="lg:mr-5">
                    <KeepAlive> 
                        <TitleFilter />
                    </KeepAlive>
                </div>

                <div>
                    <KeepAlive> 
                        <OffcanvasComponent />
                    </KeepAlive>
                </div>

            </div>

        </div>
        
    </header>

    <Teleport to="body">
        <BackToTopBtn />
    </Teleport>

</template>

<style src="@/assets/styles/components/Header.scss" lang="scss" scoped module />