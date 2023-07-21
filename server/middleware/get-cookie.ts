export default defineEventHandler((event) => {
    event.context.custom_cookie = getCookie(event, 'my_cookie');
});
