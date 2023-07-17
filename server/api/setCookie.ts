import { setCookie } from "h3";

export default defineEventHandler((event) => {

    console.log('set cookie in Event Handler')
    setCookie(event, 'test_cookie', 'test_value')

    return {
        hello: 'world'
    }
})
