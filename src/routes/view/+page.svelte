<script>
    import CoctailCard from '../../components/CoctailCard.svelte';
    import Search from '../../UI/Search.svelte';
    import {createSearchStore, searchHandler} from '$lib/stores/search'
    import { blur } from 'svelte/transition';
    import { addSearchTerms } from '$lib/scripts';
    
    
    /** @type {import('$lib/types').DrinksList} */
	export let data;
    export let form;

    /** @type {import("svelte/store").Writable<import("$lib/types").SearchStore>} */
    let searchStore;
 
    const baseCocktails = data.cocktails
    const baseListings = addSearchTerms(baseCocktails)
    searchStore = createSearchStore(baseListings)  //can just make an update func and set data through it instead of creating in here
    
    $: {
        searchHandler($searchStore)      // filter when $searchStore.search changes                
    }

    // searchResponse = form                                       //

    // if (form?.attributes.searchTerm && searchData?.length) {
    //     updateStore({ search: form.attributes.searchTerm });
    // }


</script>   

<svelte:head>
    <title>Cocktails display</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
</svelte:head>
 
<section>
    <h1>Coctail maker</h1>

    <!-- <Search bind:response={searchResponse} store={searchStore}/> -->
    <Search {form}/>
    
    <section class="content">

        <div class="cocktailList">

            <h1 class="interface"> <strong> {$searchStore.data.length} </strong>&nbsp;&nbsp;listings loaded on the page</h1>
            <h1 class="interface"> <strong> {$searchStore.filtered.length} </strong>&nbsp;&nbsp;listings match with your search</h1>

            {#if !$searchStore.filtered.length}
                <h1 class="counter interface">No listings that match your search are loaded. <br> Try Search the DB</h1>
            {/if}

            {#each $searchStore.filtered as cocktail}
                <article transition:blur={{ delay: 200, duration: 500 }}>
                    <CoctailCard {cocktail} bind:form={form}/>
                </article>
            {/each}
        </div>
        
    </section>  
</section>

<style>
    .content {
        padding: 40px 350px;
        font-family: 'Bebas Neue', sans-serif;
    }

    .cocktailList {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 60px;
        grid-row-gap: 60px;
    }

    .interface {
        grid-column: span 2;
        display: flex;
        justify-content: center;
        background-color: var(--light-text-clr);       /* #E0E0E0 */
        padding: 10px 40px;
        margin: 10px 0 80px;
        font-weight: 300;
        border-radius: 10px;
    }

    article {
        grid-column: span 1;
    }

    .counter {
        grid-column: span 4;
        text-align: center;
    }


</style>