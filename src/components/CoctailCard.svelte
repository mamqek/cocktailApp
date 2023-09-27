

<script>
    import { page } from '$app/stores';
    
    /** @type {import('$lib/types').CocktailData} */
    export let cocktail;

    function handleClick() {
      if ($page.params.DrinkID != cocktail.idDrink) {    // So it does not redirect on the same page
        window.location.href = `view/${cocktail.idDrink}`
      }
    }
</script>

<!-- svelte-ignore a11y-interactive-supports-focus -->
<div role="link" class="card" on:click={handleClick} on:keypress={handleClick} >
  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
  <h3>{cocktail.strDrink}</h3>
</div>
  
<style>
.card {
  cursor: pointer; 
  background-color: var(--button-clr); /* #E0E0E0 */
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

img {
  width: 45%;
  height: auto;

  display:block;
  margin: 0 auto;           /* Center horizontally */

  border-radius: 8px;
  margin-bottom: 10px;
}

h3 {
  font-size: 1.2rem;
  color: var(--dark-text-clr);
}
</style>
