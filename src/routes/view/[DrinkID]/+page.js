import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {

    /**
    * @param {string} id - The ID of the cocktail.
    */
    const fetchCocktail = async (id) => {
        const productRes = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const cocktail = await productRes.json()

        if (!cocktail.drinks) throw error(404, 'No product with such ID');
        
        return cocktail.drinks
    }

    return {
        drinks: await fetchCocktail(params.DrinkID),
    }

};
