<script>
    /** @type {import('$lib/types').FormResponse} */
    export let response;

    /** @type {import("svelte/store").Writable<import("$lib/types").SearchStore>} */
    export let store;

    

    
    // if ($page.status == 400) {      //check for error in form response
        // searchTerm = response.attributes.searchTerm
    // }


    // as an upgrade u could make so searchTerm is sent while still in searchBox, without pusghing the button. 
    // it would show when product doesnt exist
</script>


<form method="post">
        <span class="search-container">
            <input type="text" name="searchTerm" bind:value={$store.search} class="search-bar" placeholder="Search on the page...">
            <button type="submit" class="search-button">Search the DB</button>
        </span>

        <div class="response">
            {#if response} <p> {response.message} </p> {/if}
        </div>
</form>

<style>
    
    form {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
    }

    .search-container {
        display: flex;
        width: 100%;
        max-width: 900px; /* You can adjust the max-width to your preference */
        margin: 0 auto;
        background-color: #fff;
        border-radius: 7px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.333);
        overflow: hidden;
    }

    .search-bar {
        flex: 1;
        outline: none;
        font-size: 16px;
        padding: 9px 4px 9px 40px;
        background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;

    }

    .search-button {
        padding: 10px 20px;
        background-color: #770e07;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .search-button:hover {
        background-color: #ef3b2d;
    }

    .response {
        display: flex;
        justify-content: center;
    }

</style>