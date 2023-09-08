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
            <el-form
                @submit.prevent="onSubmit"
                label-position="top"
                label-width="100px"
            >
                <div class="flex flex-col text-slate-600 mt-4">
                    <el-form-item
                        label="First Name"
                        v-if="authState === 'signup'"
                    >
                        <el-input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter your first name"
                            v-model="firstName"
                            size="large"
                        />
                    </el-form-item>
                    <el-form-item
                        label="Last Name"
                        v-if="authState === 'signup'"
                    >
                        <el-input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter your first name"
                            v-model="lastName"
                            size="large"
                        />
                    </el-form-item>
                    <el-form-item
                        label="Level Of Education"
                        v-if="authState === 'signup'"
                    >
                        <el-select
                            name="levelOfEducation"
                            id="levelOfEducation"
                            v-model="levelOfEducation"
                            size="large"
                            class="w-full"
                        >
                            <el-option value="">
                                Select your level of education
                            </el-option>
                            <el-option value="primary">Primary</el-option>
                            <el-option value="high-school">
                                High School/Secondary
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Email address">
                        <!-- <label for="email" class="text-base">Email</label> -->
                        <el-input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                            v-model="email"
                            size="large"
                        />
                    </el-form-item>

                    <el-form-item label="Password">
                        <!-- <label for="password" class="text-base">Password</label> -->
                        <el-input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            v-model="password"
                            size="large"
                        />
                    </el-form-item>

                    <!-- form actions -->
                    <div>
                        <el-button
                            class="outline-none bg-purple-800 text-white hover:bg-purple-500 px-5 py-2 rounded-lg"
                            native-type="submit"
                        >
                            {{ authState === 'login' ? 'Login' : 'Signup' }}
                        </el-button>
                        <el-button
                            class="outline-none underline hover:text-purple-500 ml-3 cursor-pointer"
                            @click="changeAuthState"
                            native-type="button"
                        >
                            {{
                                authState === 'login'
                                    ? 'or Sign up'
                                    : 'or Login'
                            }}
                        </el-button>
                    </div>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { createUser } from '@/server/database/userRepository';
const { query } = useRoute();

const client = useSupabaseClient();
const user = useSupabaseUser();

const authState = ref('login');
const email = ref('');
const password = ref('');
const isLoading = ref(false);
const firstName = ref('');
const lastName = ref('');
const levelOfEducation = ref('');

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
    try {
        const { data, error } = await client.auth.signUp({
            email: email.value,
            password: password.value,
            options: {
                data: {
                    firstName: firstName.value,
                    lastName: lastName.value,
                    levelOfEducation: levelOfEducation.value,
                },
            },
        });
        if (error) {
            throw error;
        }
        console.log(data);
        if (data && data.user) {
            const { email: email_address } = data.user;
            const {
                firstName: first_name,
                lastName: last_name,
                levelOfEducation: level_of_education,
            } = data.user.user_metadata;

            if (
                email_address &&
                first_name &&
                last_name &&
                level_of_education
            ) {
                const userData = {
                    email: email_address,
                    firstName: first_name,
                    lastName: last_name,
                    levelOfEducation: level_of_education,
                };
                const newUser = await useFetch('/api/auth/signup', {
                    method: 'POST',
                    body: userData,
                });
                console.log(newUser);
            }
        }
        // if (error) console.log(error);
    } catch (err) {
        console.log(err);
    }
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
