export const actions = {
    login: async ({ request }) => {
        const { email, password } = Object.fromEntries(await request.formData()) as {
            email : String, 
            password : String
        }
    }
};