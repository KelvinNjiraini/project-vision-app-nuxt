<template>
    <div>
        <h3>{{ message }}</h3>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const message = ref('Primary page index.vue');

definePageMeta({
    middleware: 'auth',
});
</script>
