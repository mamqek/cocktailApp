<script>
    import { page } from '$app/stores';
    import { enhance, applyAction } from '$app/forms';
    import Input from '../../components/Input.svelte';

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
        <h2>Login</h2>                                                                                                                      

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

        <p>Don't have an account? <a href="#">Signup</a></p>
        

        {#if form} <p class="response"> {form?.message} </p> {/if}
        
    </form>
</body>

<style>

    body{
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #272b34;
    }


    form {
        background: #29313c;
        padding: 40px 50px 40px;
        display: flex;
        flex-direction: column;
        text-align: center;
        border-radius: 10px;
        box-shadow: 0 3px 5px #0aa1ff,
        0 5px 10px #0aa1ff,
        0 5px 30px #0aa1ff;
    }


    form h2 {
        color: #fff;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 1.25em;
        letter-spacing: 0.1em;
        margin-bottom: 30px;
    }

    .inputBox input[type='submit']{
        background: var(--clr);
        border: none;
        padding: 15px;
        border-radius: 50px;
        color: #1c2630;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        cursor: pointer;
        box-shadow: 0 0 5px #0aa1ff;
        font-size: 1.15em;
        font-weight: 600;
        transition: 0.5s;
    }

    .inputBox input[type='submit']:hover{
        letter-spacing: 0.35em;
    }

    .check{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        padding-bottom: 30px;
        text-transform: uppercase;
    }

    .check input{
        accent-color: var(--clr);
        margin-right: 10px;
    }


    form p{
        color: #fff;
        text-transform: uppercase;
    }

    form p a{
        color: var(--clr);
        font-weight: 500;
        text-decoration: none;
    }

    form a:hover{
        text-decoration: underline;
    }
</style>