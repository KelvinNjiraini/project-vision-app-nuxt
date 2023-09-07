import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        isLoggedIn: false,
        userData: null,
    }),
    actions: {
        logout() {
            this.userData = null;
        },
    },
    persist: true,
});
