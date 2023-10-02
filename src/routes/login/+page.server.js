import { generateSessionID } from '$lib/scripts.js';
import {prisma} from '$lib/server/prisma.js'
import { fail, redirect } from '@sveltejs/kit';



export const actions = {
    login: async ({ request, locals, cookies }) => {
        const { email, password } = Object.fromEntries(await request.formData())
        
        try {
            const user = await prisma.user.findUnique({
                where: {
                  email
                },
            });

            if (user.password == password) {
                
                const userID = user.id
                const sessionID = generateSessionID()

                await prisma.session.deleteMany({
                    where: {
                        userID
                    },
                });
                
                await prisma.session.create({       //save sessionID in db
                    data: {
                        id : sessionID,
                        userID, 
                    },
                })

                cookies.set("session", sessionID)

            } else {
                //goes to catch block
            }

        } catch (err) {
            console.log(err)
            return fail(401, {message: 'Authorization failed.'})
        }

        // throw redirect(303, "/view")

        // return {
        //     message : "Authorization successful.",
        //     data : user         
        // }


    }
};