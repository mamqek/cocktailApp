<script>
    import CoctailCard from '../../../components/CoctailCard.svelte';


    /** @type {import('./$types').PageData} */
    export let data;
    const { drinks } = data
    let cocktail = drinks[0]

    /**
    * @typedef {Object} Ingredient
    * @property {string} ingredient - The name of the ingredient.
    * @property {string} measure - The amount of the ingredient.
    * 
    * @typedef {Ingredient[]} Ingredients
    */

    /** @type {Ingredients} */
    let ingredients = []

    for (let index = 1; index<=15; index++) {
        if (!cocktail["strIngredient"+index]) {
            break
        }

        ingredients.push({
            ingredient : cocktail["strIngredient"+index], 
            measure : cocktail["strMeasure"+index]
        })
    }

</script>

<div class="container">
    <div class="card">
        <CoctailCard bind:cocktail={cocktail} />
    </div>
    <div class="ingredients">
        {#each ingredients as row}
            <p>{row.ingredient}.     {row.measure ?? ""}</p>
        {/each}
    </div>
    <div class="info">
        <h1>{cocktail.strInstructions}</h1>
    </div>
</div>


<style>
    .container {
        color: antiquewhite;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    .card {
        grid-column: span 6;
    }

    .ingredients {
        grid-column: span 6;
    }
    
    .info {
        grid-column: span 12;
    }
</style>
