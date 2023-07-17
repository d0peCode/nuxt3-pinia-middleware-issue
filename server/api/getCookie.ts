import { getCookie } from "h3";

export default defineEventHandler((event) => {

    const cookie = getCookie(event, 'test_cookie')

    console.log('get cookie in Event Handler', cookie)

    return {
        hello: getCookie(event, 'test_cookie')
    }
})
