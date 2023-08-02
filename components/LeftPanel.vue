<template>
    <div class="min-h-screen bg-purple-500 w-52">
        <div class="flex flex-col">
            <ul>
                <li>
                    <nuxt-link to="/primary/dashboard">Dashboard</nuxt-link>
                </li>
                <li><nuxt-link to="/primary/exams">Past Exams</nuxt-link></li>
                <li>
                    <nuxt-link to="/primary/institutions"
                        >Institutions</nuxt-link
                    >
                </li>
                <li><button>Sign out</button></li>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
//
</script>
<style></style>
