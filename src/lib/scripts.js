    /**
     *  @param {import('$lib/types').CocktailData[]} base - The initial data .
     *  @param {import('$lib/types').CocktailData[]} newItems - New data to be added.
     *  @param {string} property - Property of item in arr by which duplicates are found.
     *  @returns {import('$lib/types').CocktailData[]} The resulted array without duplicates.
    */
    export const mergeAndRemoveDuplicates = (base, newItems, property) => {
        const uniqueItems = new Set(base.map(item => item[property]));
        const filteredNewItems = newItems.filter(item => !uniqueItems.has(item[property]));
        const mergedArray = [...base, ...filteredNewItems];
        return mergedArray;
    }

