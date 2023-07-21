import { setCookie } from "h3";

export default defineEventHandler((event) => {
    try {
        setCookie(event, 'my_cookie', 'hello-my-cookie-12345', {
            httpOnly: true
        });
        return 200
    } catch (error) {
        return createError({
            statusCode: 500,
            statusMessage: 'Something went wrong.',
        })
    }
});
