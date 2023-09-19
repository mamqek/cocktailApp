import {prisma} from '$lib/server/prisma.js'
import { fail } from '@sveltejs/kit';

export const actions = {
    register: async ({ request }) => {

        const {email, username, password} = Object.fromEntries(await request.formData());


        
        try {
            await prisma.user.create({
                data: {
                    email, 
                    username, 
                    password
                },
            })
        } catch (err) {
            console.log(err)
            return fail(500, {message: 'Could not create the user.'})
        }

        return {
            status : 201
        }

    }
};