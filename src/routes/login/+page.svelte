<script>
    import { page } from '$app/stores';
    import { enhance, applyAction } from '$app/forms';
    import Input from '../../components/Input.svelte';
    import Message from '../../components/Message.svelte';

	/** @type {import('./$types').ActionData} */
	export let form;

</script>

<body>
    <form class="login-form "action="?/login" method="POST" use:enhance={({ formElement, formData, action, cancel }) => {       //formElement, formData, action, cancel
        const email = formData.get('email');        
        if (!email) {
            cancel();
            alert('Email is required');
            return;
        }

        return async ({ result }) => {              //type, status, data
            if (result.type == "redirect") {
                applyAction(result)                 //goto() link from redirect in server
            } else if (result.type == "failure") {
                applyAction(result)                 //set $page.status to result.status which is error code
            }
        }
    }}>
        <h2>Sign in</h2>                                                                                                                      

        <Input name={"email"} type={"text"}/>

        <Input name={"password"} type={"password"}/>

        <div class="check">
            <span>
                <input type="checkbox" id="remember" name="remember">
                <label for="remember">Remember me</label>
            </span>
            <a href="#">Forgot password</a>
        </div>
    
        <div class="inputBox">
            <input type="submit" value="Sign In">
        </div>

        <p>Don't have an account? &emsp;<a href="/register">Sign up</a></p>

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
        margin-bottom: 30px;
    }

    .inputBox input[type='submit']{
        position: relative;
        width: 300px;
        margin-bottom: 20px;
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

    .check{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--light-text-clr);
        font-size: 14px;
        font-weight: 600;
        padding-bottom: 30px;
        text-transform: uppercase;
    }

    .check input{
        accent-color: var(--button-clr);
        margin-right: 10px;
    }

    .check a{
        color: var(--link-clr);
        text-decoration: none;
    }


    form p{
        margin-top: 20px;
        color: var(--light-text-clr);
        text-transform: uppercase;
    }

    form p a{
        color: var(--link-clr);
        font-weight: 550;
        text-decoration: none;
    }

    form a:hover{
        text-decoration: underline;
    }
</style>