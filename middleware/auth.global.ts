export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Nuxt Route Middleware', 'from', from.fullPath)
    if (to.query.login || to.query.logout) {
        console.log('on login || logout page')
        return navigateTo('/')
    }
})
