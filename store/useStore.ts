import { defineStore } from "pinia";
export const useStore = defineStore("store", {
    state: () => ({
        token: '',
    }),

    actions: {
        setToken(token: string) {
            this.token = token;
            useFetch('/api/setCookie', {
                method: 'POST',
                body: { token }
            })
        },
        removeToken() {
            this.token = "";
        }
    }
});
