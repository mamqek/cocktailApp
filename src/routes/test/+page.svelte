<script>
    import { page } from '$app/stores';
    import CoctailCard from '../../components/CoctailCard.svelte';
    import Search from '../../UI/Search.svelte';
    import {createSearchStore, searchHandler, updateStore} from '$lib/stores/search'
    import { blur } from 'svelte/transition';
    import { mergeAndRemoveDuplicates } from '$lib/scripts';

    
    // /** @type {import('$lib/types').DrinksList} */
	// export let data;



    // /** @type {import('$lib/types').CocktailData[]} */
    // let drinks;



</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
</svelte:head>

<div class="container">

    <div class="menu">

        <div class="item">
            <h1>Here</h1>
            <div>
                In
            </div>
            <div>
                In
            </div>
        </div>
        <div class="item">
            <h1>Here</h1>
            <div>
                In 2
            </div>
            <div>
                In
            </div>
        </div>
        <div class="item">
            <h1>Here</h1>
            <div>
                In 3
            </div>
            <div>
                In
            </div>
        </div>
        <div class="item">
            <h1>Here</h1>
            <div>
                In 3
            </div>
            <div>
                In
            </div>
        </div>
        <div class="item">
            <h1>Here</h1>
            <div>
                In 5
            </div>
            <div>
                In
            </div>
        </div>
        <div class="item">
            <h1>Here</h1>
            <div>
                In 6
            </div>
            <div>
                In
            </div>
        </div>
<!--    
        
        {#each data.cocktails as cocktail}
        <article transition:blur={{ delay: 200, duration: 500 }}>
            <CoctailCard bind:cocktail={cocktail} />
        </article>
    	    {/each} -->

    </div>


</div>


<style>

    .container {
        padding: 40px 100px;
        margin: 50px auto;
        width: 100%;
        max-width: 80vw;
        background-color: #272b34;
        font-family: 'Bebas Neue', sans-serif;
        border: 2px solid #ccc;
    }

    .menu {
        display: grid;
        grid-template: repeat(6, 1fr) / repeat(2, 1fr);    
        grid-gap: 20px; /* Adjust the gap between grid items as needed */
        grid-auto-flow: column;
    }

    .item {
        color:#ccc;
        margin-bottom: 20px; /* Adjust the margin between items as needed */
        border: 1px solid #ccc;

    }
</style>