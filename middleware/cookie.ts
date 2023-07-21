export default defineNuxtRouteMiddleware(async () => {
    if (process.client) {
        return
    }
    const event = useRequestEvent()
    event.$fetch('/api/set-cookie', { method: 'POST' })
    event.$fetch('/api/get-cookie')
});
