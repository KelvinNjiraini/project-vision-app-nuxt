<template>
    <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-3">Dashboard</h2>
        <div class="flex flex-col space-y-6 md:flex-row md:space-x-6">
            <!-- performance graph -->
            <div class="rounded-lg p-8 bg-slate-300 shadow-lg">
                **graph to be inserted here**
            </div>
            <!-- Favorite institutions -->
            <div class="rounded-lg p-8 bg-slate-300 shadow-lg w-80">
                <div class="flex justify-between items-center p-3">
                    <h3 class="text-xl text-slate-800 font-semibold">
                        Saved Institutions
                    </h3>

                    <Icon
                        name="icon-park-solid:like"
                        class="text-red-600 w-6 h-6"
                    />
                </div>
                <ul class="w-full">
                    <li
                        class="flex justify-between w-full my-2 hover:bg-blue-200 p-3 rounded-lg"
                    >
                        <h4>Chania High school</h4>
                        <Icon
                            name="fa6-solid:trash-can"
                            class="text-red-600 w-6 h-6"
                        />
                    </li>
                    <li
                        class="flex justify-between w-full my-2 hover:bg-blue-200 p-3 rounded-lg"
                    >
                        <h4>Chania High school</h4>
                        <Icon
                            name="fa6-solid:trash-can"
                            class="text-red-600 w-6 h-6"
                        />
                    </li>
                    <li
                        class="flex justify-between w-full my-2 hover:bg-blue-200 p-3 rounded-lg"
                    >
                        <h4>Chania High school</h4>
                        <Icon
                            name="fa6-solid:trash-can"
                            class="text-red-600 w-6 h-6"
                        />
                    </li>
                </ul>
            </div>
        </div>

        <!-- Subject edit -->
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
});
</script>
