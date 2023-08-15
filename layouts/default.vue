<template>
    <div class="grid md:grid-cols-[15rem,1fr] relative">
        <div class="fixed md:static z-10">
            <LeftPanel />
        </div>
        <div>
            <div class="p-8 mt-10 md:mt-0 md:p-12">
                <slot />
            </div>
        </div>
    </div>
</template>

<script></script>

<style lang="scss" scoped></style>
