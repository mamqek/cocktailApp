import {prisma} from '$lib/server/prisma.js'
import { fail, redirect } from '@sveltejs/kit';
fail

export const actions = {
    login: async ({ request }) => {
        const { email, password } = Object.fromEntries(await request.formData())
        
        let user
        try {
            user = await prisma.user.findUnique({
                where: {
                  email,
                },
            });

            if (user.password == password) {
                console.log("Authorized");
            } else {
                //goes to catch block
            }

        } catch (err) {
            console.log(err)
            return fail(401, {message: 'Authorization failed.'})
        }

        throw redirect(303, "/view")

        // return {
        //     message : "Authorization successful.",
        //     data : user         
        // }


    }
};