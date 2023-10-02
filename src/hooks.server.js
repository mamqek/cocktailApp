import {prisma} from '$lib/server/prisma'

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
    const cookies = event.cookies
    const sessionID = cookies.get("session") ?? ""

    if (sessionID) {

        try {

            const session = await prisma.session.findUnique({
                where: {
                    id : sessionID,
                },
            });
            
            if (session) {

                const user = await prisma.user.findUnique({
                    where: {
                        id : session.userID
                    },
                });

                event.locals.session = session;
                event.locals.user = user

            }

        } catch (err) {
            console.log("Error in hook" + err)
        }
        
    }

    const response = await resolve(event);

    return response;
};

export const getSession = (event) => {
    return event.locals.session;
};