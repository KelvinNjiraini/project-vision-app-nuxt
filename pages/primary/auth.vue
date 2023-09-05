<template>
    <div
        class="flex justify-center items-center min-h-screen"
        v-loading="isLoading"
    >
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
                            v-model="email"
                        />
                    </div>

                    <div class="flex flex-col space-y-1">
                        <label for="password" class="text-base">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            class="text-base px-5 py-2 rounded-md"
                            placeholder="Enter your password"
                            v-model="password"
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
                            class="outline-none underline hover:text-purple-500 ml-3 cursor-pointer"
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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const { query } = useRoute();

const client = useSupabaseClient();
const user = useSupabaseUser();
const authState = ref('login');

const email = ref('');
const password = ref('');
const isLoading = ref(false);

function changeAuthState() {
    if (authState.value === 'login') {
        authState.value = 'signup';
        return;
    }
    authState.value = 'login';
}

function onSubmit() {
    if (authState.value === 'signup') {
        signup();
        return;
    }
    // signin function
    login();
}

const signup = async () => {
    isLoading.value = true;
    const { data, error } = await client.auth.signUp({
        email: email.value,
        password: password.value,
    });

    console.log(data);
    if (error) console.log(error);
    isLoading.value = false;
};
const login = async () => {
    isLoading.value = true;
    const { data, error } = await client.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    });
    console.log(data);
    if (error) console.log(error);
    isLoading.value = false;
};

watchEffect(async () => {
    if (user.value) {
        if (query && query.redirectTo) {
            return await navigateTo(query.redirectTo as string, {
                replace: true,
            });
        }
        return await navigateTo('/primary/dashboard');
    }
});

onMounted(() => {
    console.log(user.value);
});

definePageMeta({
    layout: 'plain',
});
</script>

<style lang="scss" scoped>
/*  */
</style>
