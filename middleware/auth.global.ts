import {useStore} from "~/store/useStore";

export default defineNuxtRouteMiddleware(async () => {
    await useFetch('/api/setCookie')
    await useFetch('/api/getCookie')
});
