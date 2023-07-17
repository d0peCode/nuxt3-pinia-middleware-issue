export default defineNuxtPlugin(async () => {
    await useFetch('/api/setCookie')
    await useFetch('/api/getCookie')
});
