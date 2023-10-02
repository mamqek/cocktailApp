import { sessionStore } from '$lib/stores/session.js';


export const load = async ({ locals }) => {

    let user = locals.user  
    // if (locals.session ) {

    //     const { userID } = locals.session

    //     user = await prisma.user.findUnique({
    //         where: {
    //             id : userID
    //         },
    //     });
    // }

    return {
        user
    };
}
