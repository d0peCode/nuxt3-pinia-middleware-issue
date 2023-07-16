import { defineStore } from "pinia";
export const useStore = defineStore("store", {
    state: () => ({
        token: '',
    }),

    actions: {
        setToken(token: string) {
            this.token = token;
        }
    },

    persist: true
});
