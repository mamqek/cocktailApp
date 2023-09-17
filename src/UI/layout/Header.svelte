<script>
    import icon from '$lib/images/icon.png'
    import { page } from '$app/stores';

    function handleClick() {
        if ($page.url.pathname.includes('view')) {    // So it does not redirect on the same page
            window.location.href = `test`
        } else {
            window.location.href = `view`
        }
    }
</script>


<header>
    <nav>
        <a on:click={handleClick}>
            <img src={icon} alt="Icon" class="logo" />
        </a>
    </nav>
    <ul>
        <li>
            <a href="register.html">
                <i class="fa-solid fa-user-plus"></i>
                Register
            </a>
        </li>
        <li>
            <a href="login.html">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                Login
            </a>
        </li>
    </ul>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        color: antiquewhite;
    }

    .logo {
        width: 120px;
        height: auto;
        max-width: 100%; 
    }

    ul {
        display: flex;
        margin-right: 1rem; 
        font-size: 1.25rem; 
    }

    li {
        margin-right: 1rem; 
    }
</style>