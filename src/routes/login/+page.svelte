<script>
    import { page } from '$app/stores';
    import { enhance, applyAction } from '$app/forms';

	/** @type {import('./$types').ActionData} */
	export let form;

</script>

<div class="container">
    <h2>Login</h2>
    <form class="login-form "action="?/login" method="POST" use:enhance={({ formElement, formData, action, cancel }) => {

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

        <div class="form-group">
            <label for="username">Email:</label>
            <input type="text" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group">
            <input type="submit" value="Login">
        </div>

        {#if $page.status == 401} <p class="response"> {form?.message} </p> {/if}
        
    </form>
</div>


<style>
    .container {
        background-color: #fff;
        max-width: 400px;
        margin: 100px auto;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    h2 {
        color: #333;
    }

    .login-form {
        text-align: left;
    }

    .form-group {
            margin-bottom: 20px;
        }
        
    label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }

    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    input[type="submit"] {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    input[type="submit"]:hover {
        background-color: #555;
    }

</style>