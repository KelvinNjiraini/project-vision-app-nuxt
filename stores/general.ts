import { defineStore } from 'pinia';

interface generalState {
    currentLevel: string | null;
}

export const useGeneralStore = defineStore('general', {
    state: (): generalState => ({
        currentLevel: null,
    }),
    actions: {
        setCurrentLevel(level: string | null) {
            this.currentLevel = level;
        },
    },
    persist: true,
});
