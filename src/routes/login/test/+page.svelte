<script>
    import { onMount } from 'svelte';

    import Input from '../../../components/Input.svelte';

    let label;

    onMount(() => {
            animate()
    })

    const animate = () => {
        // labels.forEach(label => {
        //         label.innerHTML = label.innerText.split('').map((letters, i) => `<span style="transition-delay: ${i * 50}ms" > ${letters}</span>`).join('');
        //     });
        label.innerHTML = label.innerText.split('').map((letters, i) => `<span style="transition-delay: ${i * 50}ms" >${letters}</span>`).join('');
    }
</script>


<link rel="preconnect" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,300;1,700;1,900&display=swap">


<body>
<form action="#">
    <h2>Sign In</h2>
    <div class="inputBox">
        <input type="text" id="username" name="username" required>
        <label bind:this={label} for="#">Username</label>
    </div>
    <div class="inputBox">
        <input type="password" id="password" name="password" required>
        <label for="password">Password</label>
    </div>
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
</form>

</body>



<style>


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root{
    --clr: #0aa1ff;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #1c2630;
}

form{
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

form h2{
    color: #fff;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 1.25em;
    letter-spacing: 0.1em;
    margin-bottom: 30px;
}

.inputBox{
    position: relative;
    width: 300px;
    margin-bottom: 40px;
}

.inputBox input{
    position: relative;
    width: 100%;
    padding: 10px 0;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 2px solid #999;
    color: #fff;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 0.15em;
}

.inputBox input:focus,
.inputBox input:valid{
    border-bottom: 2px solid var(--clr);
}

.inputBox label{
    position: absolute;
    left: 0;
    padding: 10px 0;
    pointer-events: none;
    color: #999;
    text-transform: uppercase;
}

.inputBox label {

    letter-spacing: 0.05em;
    transition: 0.2s ease-in-out;
}

.inputBox input:focus ~ label,
.inputBox input:valid ~ label{
    color: var(--clr);
    letter-spacing: 0.2em;
    transform: translateY(-25px);
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

.check a{
    color: var(--clr);
    text-decoration: none;
}

form a:hover{
    text-decoration: underline;
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

form p{
    color: #fff;
    text-transform: uppercase;
}

form p a{
    color: var(--clr);
    font-weight: 500;
    text-decoration: none;
    
}
</style>