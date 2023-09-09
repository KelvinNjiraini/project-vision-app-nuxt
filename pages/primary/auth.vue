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
                ref="ruleFormRef"
                @submit.prevent="onSubmit(ruleFormRef)"
                label-position="top"
                label-width="100px"
                :rules="rules"
                :model="initialState"
            >
                <div class="flex flex-col text-slate-600 mt-4">
                    <el-form-item
                        label="First Name"
                        prop="firstName"
                        v-if="authState === 'signup'"
                    >
                        <el-input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter your first name"
                            v-model="initialState.firstName"
                            size="large"
                        />
                    </el-form-item>
                    <el-form-item
                        label="Last Name"
                        prop="lastName"
                        v-if="authState === 'signup'"
                    >
                        <el-input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter your first name"
                            v-model="initialState.lastName"
                            size="large"
                        />
                    </el-form-item>
                    <el-form-item
                        label="Level Of Education"
                        prop="levelOfEducation"
                        v-if="authState === 'signup'"
                    >
                        <el-select
                            name="levelOfEducation"
                            id="levelOfEducation"
                            v-model="initialState.levelOfEducation"
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
                    <el-form-item label="Email address" prop="email">
                        <!-- <label for="email" class="text-base">Email</label> -->
                        <el-input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email address"
                            v-model="initialState.email"
                            size="large"
                        />
                    </el-form-item>

                    <el-form-item label="Password" prop="password">
                        <!-- <label for="password" class="text-base">Password</label> -->
                        <el-input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            v-model="initialState.password"
                            size="large"
                        />
                    </el-form-item>

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
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRegister } from '@/composables/useRegister';
import { FormRules, FormInstance } from 'element-plus';
import { RegisterRule } from '@/utils/types';
const { query } = useRoute();

const client = useSupabaseClient();
const user = useSupabaseUser();

const authState = ref('login');

const initialState = reactive<RegisterRule>({
    email: '',
    firstName: '',
    lastName: '',
    levelOfEducation: '',
    password: '',
});
const isLoading = ref(false);
const err = ref<string | null>(null);

const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules<RegisterRule>>({
    email: [
        { required: true, message: 'Email field is required', trigger: 'blur' },
        {
            type: 'email',
            message: 'Email format is not correct',
            trigger: 'blur',
        },
    ],
    firstName: [
        {
            required: true,
            message: 'First name field is required',
            trigger: 'change',
        },
    ],
    lastName: [
        {
            required: true,
            message: 'Last name field is required',
            trigger: 'change',
        },
    ],
    levelOfEducation: [
        {
            required: true,
            message: 'Level of education field is required.',
            trigger: 'change',
        },
        {
            enum: ['primary', 'high-school'],
            message:
                'Level of education can only be "high school" or "primary"',
        },
    ],
    password: [
        {
            required: true,
            message: 'Password field is required',
            trigger: 'change',
        },
        {
            min: 6,
            message: 'Password length has to be more than 6 characters',
            trigger: 'change',
        },
    ],
});

function changeAuthState() {
    if (authState.value === 'login') {
        authState.value = 'signup';
        return;
    }
    authState.value = 'login';
}

async function onSubmit(formEl: FormInstance | undefined) {
    if (!formEl) return;
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (authState.value === 'signup') {
                signup();
                return;
            }
            // signin function
            login();
        } else {
            console.log('error submit!', valid, fields);
        }
    });
}

const signup = async () => {
    err.value = null;

    isLoading.value = true;
    try {
        const userData = {
            email: initialState.email,
            firstName: initialState.firstName,
            lastName: initialState.lastName,
            levelOfEducation: initialState.levelOfEducation,
        };
        const response = await useRegister(userData);
        if (response.error) {
            throw response.error;
        }

        const { data, error } = await client.auth.signUp({
            email: initialState.email,
            password: initialState.password,
            options: {
                data: {
                    firstName: initialState.firstName,
                    lastName: initialState.lastName,
                    levelOfEducation: initialState.levelOfEducation,
                },
            },
        });
        if (error) {
            throw error;
        }
        console.log(data);
    } catch (err) {
        console.log(err);
    }
    isLoading.value = false;
};
const login = async () => {
    isLoading.value = true;
    const { data, error } = await client.auth.signInWithPassword({
        email: initialState.email,
        password: initialState.password,
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
