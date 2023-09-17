import type { Stores } from "svelte/store";

export interface CocktailData {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string | null;
    strTags: string;
    strVideo: string | null;
    strCategory: string;
    strIBA: string | null;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string | null;
    strInstructionsDE: string;
    strInstructionsFR: string | null;
    strInstructionsIT: string;
    strInstructionsZH_HANS: string | null;
    strInstructionsZH_HANT: string | null;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string | null;
    strIngredient3: string | null;
    strIngredient4: string | null;
    strIngredient5: string | null;
    strIngredient6: string | null;
    strIngredient7: string | null;
    strIngredient8: string | null;
    strIngredient9: string | null;
    strIngredient10: string | null;
    strIngredient11: string | null;
    strIngredient12: string | null;
    strIngredient13: string | null;
    strIngredient14: string | null;
    strIngredient15: string | null;
    strMeasure1: string;
    strMeasure2: string | null;
    strMeasure3: string | null;
    strMeasure4: string | null;
    strMeasure5: string | null;
    strMeasure6: string | null;
    strMeasure7: string | null;
    strMeasure8: string | null;
    strMeasure9: string | null;
    strMeasure10: string | null;
    strMeasure11: string | null;
    strMeasure12: string | null;
    strMeasure13: string | null;
    strMeasure14: string | null;
    strMeasure15: string | null;
    strImageSource: string;
    strImageAttribution: string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
    searchTerms: string;                    //added searchTerms even though they are not in every CocktailData
    [key: string]: any;                     // Add an index signature => to access properties by string

}

export interface DrinksList {
	cocktails: CocktailData[];
}

export interface FormResponse {
    message : string;
    attributes: { [key: string]: string };
    data : CocktailData[];
}

export interface Ingridients {
	
}

export interface SearchStore {
    data : CocktailData[], 
    filtered : CocktailData[], 
    search : string,
}