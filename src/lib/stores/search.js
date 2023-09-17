import { writable } from "svelte/store"

/** @type {import("svelte/store").Writable<import("$lib/types").SearchStore>} */
export let searchStore;

/**
 *  @param {import('$lib/types').CocktailData[]} data - The initial data for the store.
 *  @returns {import("svelte/store").Writable<import("$lib/types").SearchStore>} The search store.
*/
export const createSearchStore = (data) => {
    const searchProducts = data.map((cocktail) => ({
        ...cocktail,
        searchTerms : `${cocktail.strDrink} ${cocktail.strInstructions} ${cocktail.strCategory} ${cocktail.strAlcoholic}`
    }));
    
    const store = writable({
        data : searchProducts, 
        filtered : searchProducts,
        search : '',
    })

    searchStore = store;

    return store;
}

/** @param {import('$lib/types').SearchStore} storeAttr - The initial data for the store. */
export const searchHandler = (storeAttr) => {
    console.log("handle")
    const searchTerm = storeAttr.search.toLowerCase() || ""
    storeAttr.filtered = storeAttr.data.filter((cocktail) => {
        return cocktail.searchTerms.toLowerCase().includes(searchTerm)
    })
}


/** @param {Object} updates */
export const updateStore = (updates) => {
    searchStore.update((current) => {
        return { ...current, ...updates };
    });
};    
