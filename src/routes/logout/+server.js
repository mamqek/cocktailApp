import { redirect } from '@sveltejs/kit';
import {prisma} from '$lib/server/prisma'



/** @type {import('./$types').RequestHandler} */
export const POST = async ({ cookies, locals}) => {
    const id = cookies.get("session")
    cookies.delete("session")           //after cookie deletiion on the next request hook wont find sessionID => user is not logged in

    try {

        const deletedSession = await prisma.session.delete({
            where: {
            id
            }
        })

    } catch (err) {
        console.log("Error: couldn't delete session " + err)
    }
    
    throw redirect(303, "/view")
};