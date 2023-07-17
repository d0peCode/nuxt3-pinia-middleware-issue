import { parseCookies } from "h3";

export default defineEventHandler((event) => {

    const cookie = parseCookies(event)

    console.log('get cookie in Event Handler', cookie)

    return { cookie }
})
