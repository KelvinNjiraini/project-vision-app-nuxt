<template>
    <div class="fixed">
        <div
            class="h-screen bg-purple-600 bg-opacity-80 min-w-[15rem] relative transition-all"
            :class="showPanel ? 'active' : ''"
        >
            <div
                class="inline md:hidden absolute right-5"
                :class="showPanel ? 'hamburger-active top-5' : '-top-5'"
            >
                <Icon
                    name="pajamas:hamburger"
                    class="w-6 h-6 cursor-pointer"
                    :class="
                        showPanel ? 'text-black' : 'text-white ml-12 mt-12 '
                    "
                    @click="toggleLeftPanel"
                />
            </div>
            <h3 class="text-white text-2xl pl-7 pt-6">Project Vision</h3>
            <div class="flex flex-col py-6 h-3/4 pl-4">
                <ul class="space-y-3">
                    <li class="">
                        <nuxt-link
                            to="/primary/dashboard"
                            class="p-3 hover:bg-white text-white flex items-center hover:text-black"
                            @click="toggleLeftPanel"
                            ><Icon
                                name="ic:outline-dashboard"
                                class="text-inherit w-6 h-6"
                            />
                            <span class="ml-3">Dashboard</span></nuxt-link
                        >
                    </li>
                    <li class="">
                        <nuxt-link
                            to="/primary/profile"
                            class="p-3 hover:bg-white text-white flex items-center hover:text-black"
                            @click="toggleLeftPanel"
                            ><Icon
                                name="carbon:user-profile"
                                class="text-inherit w-6 h-6"
                            />
                            <span class="ml-3">My profile</span></nuxt-link
                        >
                    </li>
                    <li class="">
                        <nuxt-link
                            to="/primary/exams"
                            class="p-3 hover:bg-white text-white flex items-center hover:text-black"
                            @click="toggleLeftPanel"
                            ><Icon
                                name="healthicons:i-exam-multiple-choice"
                                class="text-inherit w-6 h-6"
                            />
                            <span class="ml-3">My Exams</span></nuxt-link
                        >
                    </li>
                    <li class="">
                        <nuxt-link
                            to="/primary/institutions"
                            class="p-3 hover:bg-white text-white flex items-center hover:text-black"
                            @click="toggleLeftPanel"
                            ><Icon
                                name="fa:institution"
                                class="text-inherit w-6 h-6"
                            />
                            <span class="ml-3">Institutions</span></nuxt-link
                        >
                    </li>
                </ul>
                <div class="p-3 mt-auto">
                    <button class="flex items-center group">
                        <span class="mr-3 text-red-900">Sign Out</span>
                        <Icon
                            name="ic:outline-logout"
                            class="text-red-900 w-6 h-6"
                        />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { useWindowSize } from '@vueuse/core';
const { height, width } = useWindowSize();

const panelActive = ref(false);

const showPanel = computed(() => {
    return width.value < 768 && !panelActive.value;
});

function toggleLeftPanel() {
    panelActive.value = !panelActive.value;
}
</script>
<style scoped>
a.router-link-exact-active {
    @apply bg-white text-black;
}

.active {
    @apply right-[16rem];
}

.hamburger-active {
    @apply text-black -right-[5rem] bg-purple-300 p-3 rounded-full;
}
</style>
