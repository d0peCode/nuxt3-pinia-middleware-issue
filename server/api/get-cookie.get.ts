export default defineEventHandler((event) => {
    try {
        console.log('Cookie is', event.context.custom_cookie)
        return 200
    } catch (error) {
        return createError({ statusCode: 500, statusMessage: 'Something went wrong.' })
    }
})
