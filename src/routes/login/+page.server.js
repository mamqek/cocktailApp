import { generateSessionID } from '$lib/scripts.js';
import {prisma} from '$lib/server/prisma.js'
import { fail, redirect } from '@sveltejs/kit';


export const actions = {
    login: async ({ request, locals, cookies }) => {
        const { email, password } = Object.fromEntries(await request.formData())
        
        try {
            const user = await prisma.user.findUnique({
                where: {
                  email,
                },
            });

            if (user.password == password) {
                console.log("Authorized");

                const userID = user.id
                console.log(userID);
                const sessionID = generateSessionID()

                await prisma.authentication.create({       //save sessionID in db
                    data: {
                        sessionID,
                        userID
                    },
                })

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