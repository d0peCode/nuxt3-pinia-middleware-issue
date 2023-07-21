export default defineNuxtRouteMiddleware(async () => {
    if (process.client) {
        return
    }
    await $fetch('/api/set-cookie', { method: 'POST' })
    await $fetch('/api/get-cookie')
});
