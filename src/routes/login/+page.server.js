// import {prisma} from '$lib/server/prisma.js'

// export const actions = {
//     login: async ({ request }) => {
//         const { email, password } = Object.fromEntries(await request.formData()) as {
//             email : String, 
//             password : String
//         }

//         try {
//             await prisma.user.create({
//                 data: {
//                     email, 
//                     password
//                 }
//             })
//         }


//     }
// };