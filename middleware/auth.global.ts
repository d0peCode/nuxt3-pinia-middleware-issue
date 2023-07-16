import {useStore} from "~/store/useStore";

export default defineNuxtRouteMiddleware(() => {
    const store = useStore();
    console.log('store.token1', store.token)
    store.setToken('token')
    console.log('store.token2', store.token)
});
