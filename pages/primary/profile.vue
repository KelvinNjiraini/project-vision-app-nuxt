<template>
    <div>
        <h2 class="text-2xl text-slate-800 font-bold mb-3">My profile</h2>
        <div class="flex flex-col">
            <div class="max-w-lg text-slate-800">
                <form @submit="changeDetails" class="flex flex-col space-y-5">
                    <h4 class="text-lg font-semibold text-slate-700">
                        My personal details
                    </h4>
                    <div class="flex flex-col space-y-1">
                        <label for="email" class="text-base">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            class="text-base px-5 py-2 rounded-md border"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div class="flex flex-col space-y-1">
                        <label for="first_name" class="text-base"
                            >First Name</label
                        >
                        <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            class="text-base px-5 py-2 rounded-md border"
                            placeholder="Enter your first name"
                        />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label for="last_name" class="text-base"
                            >Last Name</label
                        >
                        <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            class="text-base px-5 py-2 rounded-md border"
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div class="flex flex-col space-y-1">
                        <label for="phone_number" class="text-base"
                            >Phone number</label
                        >
                        <input
                            type="tel"
                            name="phone_number"
                            id="phone_number"
                            class="text-base px-5 py-2 rounded-md border"
                            placeholder="Enter your phone number "
                        />
                    </div>

                    <div>
                        <button
                            class="outline-none bg-purple-800 hover:bg-purple-500 text-white px-5 py-2 rounded-lg mt-4"
                            type="submit"
                        >
                            Save changes
                        </button>
                    </div>
                </form>
                <form
                    @submit="changePassword"
                    class="flex flex-col space-y-5 my-5"
                >
                    <h4 class="text-lg font-semibold text-slate-700">
                        My password
                    </h4>
                    <div class="flex flex-col space-y-1">
                        <label for="password" class="text-base"
                            >New password</label
                        >
                        <input
                            type="text"
                            name="password"
                            id="password"
                            class="text-base px-5 py-2 rounded-md border"
                            placeholder="Enter your new password"
                        />
                    </div>
                    <div>
                        <button
                            class="outline-none bg-purple-800 hover:bg-purple-500 text-white px-5 py-2 rounded-lg mt-4"
                            type="submit"
                        >
                            Save changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
function changeDetails() {
    //
}

function changePassword() {
    //
}
</script>

<style lang="scss" scoped></style>
