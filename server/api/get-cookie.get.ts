import {getCookie} from "h3";
export default defineEventHandler((event) => {
    try {
        console.log('Cookie is', getCookie(event, 'my_cookie'))
        return 200
    } catch (error) {
        return createError({ statusCode: 500, statusMessage: 'Something went wrong.' })
    }
})
