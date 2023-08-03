<template>
    <div class="h-screen bg-purple-600 bg-opacity-80 w-52">
        <h3 class="text-white text-2xl pl-7 pt-6">Project Vision</h3>
        <div class="flex flex-col py-6 h-3/4 pl-4">
            <ul class="space-y-3">
                <li class="">
                    <nuxt-link
                        to="/primary/dashboard"
                        class="p-3 hover:bg-white text-white flex items-center hover:text-black"
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
                    <span class="mr-3 text-red-800">Sign Out</span>
                    <Icon
                        name="ic:outline-logout"
                        class="text-red-800 w-6 h-6"
                    />
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
//
</script>
<style></style>
