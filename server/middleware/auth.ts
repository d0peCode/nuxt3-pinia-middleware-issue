import {parseCookies, setCookie, deleteCookie, getQuery} from "h3";

export default defineEventHandler(async (event) => {
    console.log('New request: ' + getRequestURL(event))

    const routeQuery = getQuery(event)
    const cookies = parseCookies(event)

    if (routeQuery.login && !cookies.test_cookie) {
        console.log('login')
        await fetch('https://dummyjson.com/products/1')
            .then(res => res.json())
            .then(json => console.log(json))
            .then(() => {
                setCookie(event, 'test_cookie', 'test_value', { httpOnly: true })
            })
    }


    if (routeQuery.logout && cookies.test_cookie) {
        console.log('logout')
        deleteCookie(event, 'test_cookie')
    }

})

