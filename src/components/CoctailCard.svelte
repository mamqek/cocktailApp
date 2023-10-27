<script>
  import { slide } from 'svelte/transition';
  import { page } from '$app/stores';
  import { enhance } from '$app/forms';
  
  /** @type {import('$lib/types').CocktailData} */
  export let cocktail;

  let info = false
  function handleClick() {
    // if ($page.params.DrinkID != cocktail.idDrink) {    // So it does not redirect on the same page
    //   window.location.href = `view/${cocktail.idDrink}`
    // }
    info = !info
  }

  function formClick() {
      this.submit()
  }

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

<form method="POST" action="?/card" on:focus={formClick} on:click={formClick} use:enhance={({ formElement, formData, action, cancel }) => {
    return async ({result}) => {
      console.log(result);
    }
      
}}>
</form>

<input type="submit">
<div class="parent-container">
<!-- svelte-ignore a11y-interactive-supports-focus -->
  <div role="link" class="card" on:click={handleClick} on:keypress={handleClick} >
    <div class="image-container">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
    </div>
    <h3>{cocktail.strDrink}</h3>
  </div>

  {#if info}
    <div class="card info" transition:slide={{axis : 'x'}}>
      <div class="ingridients text-container">
        <h3>Ingridients</h3>
        <ul>
          {#each ingredients as ingredient}
            <li class="text">{ingredient.ingredient}</li>
          {/each}
        </ul>
      </div>
      <!-- <div class="instructions text-container">
        <h3>Instructions</h3>
        <p class="text">{cocktail.strInstructions}</p>
      </div> -->
    </div>
  {/if}
    
</div>

<style>

.parent-container {
    position: relative;
    display: flex; 
}
.info {
  position: absolute;
  background-color: pink;
  left: 105%;
  height: 100%;
  z-index: 999;
}

.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer; 
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.437);
}

.image-container {
    width: 100%;
    padding-top: 150%; /* Adjust this value to achieve the desired aspect ratio */
    position: relative;
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* This will stretch the image to fill the container */
  border-radius: 8px;
}

h3 {
  text-align: center;
  font-size: 1.4rem;
  color: var(--light-text-clr);
  margin-top: 5%;
}

.text-container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

h3 {
  margin-bottom: 5%;
  text-decoration: underline;
  font-size: 1.5rem;
}

.text {
  font-size: 1.1rem;
}


</style>
