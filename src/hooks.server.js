import { parse, serialize } from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    console.log("handle");
    const cookies = event.cookies
    const sessionID = cookies.get("auth") ?? ""
    console.log(sessionID);
    event.locals.sessionID = sessionID;

    const response = await resolve(event);

    // if (event.locals.sessionChanged) {
    //     console.log("cookie updated");
    //     response.headers['set-cookie'] = serialize('session', JSON.stringify(event.locals.session), {
    //         path: '/',
    //         httpOnly: true,
    //         // secure: true, // Uncomment this if using HTTPS
    //         maxAge: 3600 // 1 hour
    //     });
    // }

    return response;
};

export const getSession = (event) => {
    return event.locals.session;
};