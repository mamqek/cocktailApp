/**
 *  @param {import('$lib/types').CocktailData[]} base - The initial data .
 *  @param {import('$lib/types').CocktailData[]} newItems - New data to be added.
 *  @param {string} property - Property of item in arr by which duplicates are found.
 *  @returns {import('$lib/types').CocktailData[]} The resulted array without duplicates.
*/
export const mergeWithoutDuplicates = (base, newItems, property) => {
    const uniqueItems = new Set(base.map(item => item[property]));
    const filteredNewItems = newItems.filter(item => !uniqueItems.has(item[property]));
    const mergedArray = [...base, ...filteredNewItems];
    return mergedArray;
}

/**
 *  @param {import('$lib/types').CocktailData[]} data - fetched data
 *  @returns {import('$lib/types').CocktailData[]} The resulted data with added search terms.
*/
export const addSearchTerms = (data) => {
    return data.map((cocktail) => ({
        ...cocktail,
        searchTerms : `${cocktail.strDrink} ${cocktail.strInstructions} ${cocktail.strCategory} ${cocktail.strAlcoholic}`
    }))
};



export const generateSessionID = () => {
    const randomBytes = new Uint8Array(16); // Create an 8-bit unsigned integer array with 16 elements
    crypto.getRandomValues(randomBytes);    //fill with random values
    return Array.from(randomBytes).join("") //transform to string
}