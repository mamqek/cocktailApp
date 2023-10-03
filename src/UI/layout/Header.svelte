<script>
    import icon from '$lib/images/icon.png'
    import avatar from '$lib/images/avatar.png'
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
        <a class="link" href="{href}">
            <img src={icon} alt="Icon" class="logo" />
        </a>
    </nav>

    {#if !user}

        <ul>
            <li>
                <a  class="link" href="/register">
                    <i class="fa-solid fa-user-plus"></i>
                    Register
                </a>
            </li>
            <li>
                <a  class="link" href="/login">
                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                    Sign in
                </a>
            </li>
        </ul>

    {:else}

        <nav class="profilenav">
            <a class="link" href="/profile">
                <span class="profile">
                    <img src={avatar} alt="Profile" class="avatar" />
                    <p>{user.username}</p>
                </span>
            </a>

            <form action="/logout" method="POST">
                <button class="logout link" type="submit" >
                    <i class="fa-solid fa-sign-out"></i>
                    Logout
                </button>
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
        width: 100px;
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
        width: 140px;
        min-width: none;
        min-height: 60px;
        position: relative;
        background-color: #e94444;
        border-radius: 12px;
        color: var(--dark-text-clr);
        font-family: 'Bebas Neue', sans-serif;

    }   

    .profile p {
        margin: 0 10px;
        position: absolute;
        right: 0;
    }

    .avatar {
        border-radius: 40px;
        width: 60px;
        height: 60px;
        max-width: 100%; 
        position: absolute;
        right: 100px;
    }
    
    .link {
        display: inline-block;
    }

    .logout {
        padding: 0 12px 4px;
        margin-right: 1rem; 
    }




</style>