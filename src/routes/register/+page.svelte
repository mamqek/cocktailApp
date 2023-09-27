<script>
    import { enhance, applyAction } from "$app/forms";
    import { page } from "$app/stores";
    import Input from "../../components/Input.svelte";
    import Message from "../../components/Message.svelte";
    

    export let form
</script>



<body>
    <form class="register-form "action="?/register" method="POST" use:enhance={({ formElement, formData, action, cancel }) => {

        if (formData.get("password") !== formData.get("confirm-password")) {
            form = {message: "Passwords do not match"}            
            cancel();
            return;
        }

        return async ({result}) => {
            applyAction(result)     //same logic as in login

        }
        }}>

        <h2>Registration</h2>

        <Input name={"username"} type={"text"}/>

        <Input name={"email"} type={"text"}/>

        <Input name={"password"} type={"password"}/>

        <Input name={"confirm-password"} type={"password"}/>

        <div class="inputBox">
            <input type="submit" value="Register">
        </div>

        <Message message={form?.message} timeout={0}/>
    </form>
</body>







<style>
    body{
        font-family: 'Bebas Neue', sans-serif;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--background-clr);
    }

    form {
        background: var(--second-background-clr);
        padding: 40px 50px 40px;
        display: flex;
        flex-direction: column;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 3px 5px var(--button-clr),
        0 5px 10px var(--button-clr),
        0 5px 30px var(--button-clr);
    }

    form h2 {
        color: var(--light-text-clr);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 1.5em;
        letter-spacing: 0.2em;
        margin: 0 auto 30px;
    }
    
    .register-form {
        text-align: left;
    }
    
    .inputBox input[type='submit']{
        position: relative;
        width: 300px;
        margin: 20px 0;
        background: var(--button-clr);
        border: none;
        padding: 15px;
        border-radius: 50px;
        color: var(--dark-text-clr);
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        box-shadow: 0 0 5px var(--light-text-clr);
        font-size: 1.15em;
        font-weight: 500;
        transition: 0.5s;
    }

    .inputBox input[type='submit']:hover{
        letter-spacing: 0.35em;
    }
</style>