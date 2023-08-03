<template>
    <div class="h-screen bg-purple-500 w-52">
        <div class="flex flex-col mt-16 pl-4">
            <ul class="space-y-10">
                <li>
                    <nuxt-link to="/primary/dashboard">Dashboard</nuxt-link>
                </li>
                <li><nuxt-link to="/primary/exams">Past Exams</nuxt-link></li>
                <li>
                    <nuxt-link to="/primary/institutions"
                        >Institutions</nuxt-link
                    >
                </li>
            </ul>
            <div class="mt-5">
                <button>Sign out</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
//
</script>
<style></style>
