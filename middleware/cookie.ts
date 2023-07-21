export default defineNuxtRouteMiddleware(async () => {
    await useFetch('/api/set-cookie', { method: 'POST' })
    await useFetch('/api/get-cookie')
});
