import {prisma} from '$lib/server/prisma.js'
import { fail, redirect } from '@sveltejs/kit';

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
            if (err.code === 'P2002') {
                return fail(409, {message: 'User with this email already exists'})
            }
            return fail(500, {message: 'Could not create the user.'})
        }

        // throw redirect(303, "/login")

        return {
            message : 'Account created successfully. You can proceed to the login now'
        }

    }
};