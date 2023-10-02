<script>
    import icon from '$lib/images/icon.png'
    import { page } from '$app/stores';
    
    let href
    $: {
        if ($page.url.pathname == '/view') {    // So it does not redirect on the same page
            href = '/test'
        } else {
            href = '/view'
        }
    }

    export let user
    
    // $: user = $sessionStore.user
    // $: user = $page.data.user       //after login only layout.server.js relaods and $page.data updates
</script>


<header>

    <nav>
        <a href="{href}">
            <img src={icon} alt="Icon" class="logo" />
        </a>
    </nav>

    {#if !user}

        <ul>
            <li>
                <a href="/register">
                    <i class="fa-solid fa-user-plus"></i>
                    Register
                </a>
            </li>
            <li>
                <a href="/login">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    Sign in
                </a>
            </li>
        </ul>

    {:else}

        <nav class="profilenav">
            <a class="link" href="/profile">
                <span class="profile">
                    <img src={icon} alt="Profile" class="logo" />
                    <p>{user.username}</p>
                </span>
            </a>

            <form action="/logout" method="POST">
                <button class="logout link" type="submit" >Logout</button>
            </form>
        </nav>

    {/if}

</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        color: antiquewhite;
        padding: 20px 20px;
        font-size: 1.25rem; 
    }

    .logo {
        width: 80px;
        height: auto;
        max-width: 100%; 
    }

    ul {
        display: flex;
        margin-right: 1rem; 
    }

    li {
        margin-right: 1rem; 
    }

    .profilenav {
        display: flex;
        align-items: center;
        gap: 1.25rem;
    }

    .profile {
        display: flex;
        align-items: center;
    }   
    
    .link {
        background-color: var(--button-clr);
        display: inline-block;
        border-radius: 8px;
    }

    .logout {
        padding: 0 12px 4px;
        background-color:  var(--button-clr2);
    }



</style>