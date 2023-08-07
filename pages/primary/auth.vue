<template>
    <div class="flex justify-center items-center min-h-screen">
        <!-- start of card -->
        <div
            class="shadow-xl bg-slate-200 rounded-lg p-8 flex flex-col space-x-5"
        >
            <!-- Login/Register -->
            <h2 class="text-2xl text-slate-800">
                {{
                    authState === 'login'
                        ? 'Welcome back! Log into your account'
                        : 'Create an account with us today!'
                }}
            </h2>
            <!-- Actual form -->
            <form @submit.prevent="onSubmit">
                <div class="flex flex-col space-y-5 text-slate-600 mt-4">
                    <div class="flex flex-col space-y-1">
                        <label for="email" class="text-base">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            class="text-base px-5 py-2 rounded-md"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div class="flex flex-col space-y-1">
                        <label for="password" class="text-base">Password</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            class="text-base px-5 py-2 rounded-md"
                            placeholder="Enter your password"
                        />
                    </div>

                    <!-- form actions -->
                    <div>
                        <button
                            class="outline-none bg-purple-800 text-white hover:bg-purple-500 px-5 py-2 rounded-lg"
                            type="submit"
                        >
                            {{ authState === 'login' ? 'Login' : 'Signup' }}
                        </button>
                        <button
                            class="outline-none underline hover:text-purple-500 ml-3"
                            @click="changeAuthState"
                            type="button"
                        >
                            {{
                                authState === 'login'
                                    ? 'or Sign up'
                                    : 'or Login'
                            }}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const authState = ref('login');

function changeAuthState() {
    if (authState.value === 'login') {
        authState.value = 'signup';
        return;
    }
    authState.value = 'login';
}

function onSubmit() {
    console.log('Submitted!');
}
</script>

<style lang="scss" scoped>
/*  */
</style>
