<template>
    <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-3">Dashboard</h2>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
});
</script>
