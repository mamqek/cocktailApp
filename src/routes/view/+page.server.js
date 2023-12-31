import { fail, redirect } from "@sveltejs/kit"
import { log } from "console";

export const load = async ({ fetch }) => {

    const fetchMainMenu = async () => {  
        
        const arrLabels = [
            'Margarita',
            'Mojito',
            'Piña Colada',
            'Cosmopolitan',
            'Martini',
            'Old Fashioned',
            'Moscow Mule',
            'Daiquiri',
            'Negroni',
            'Gin',
            'Screwdriver'
        ];

        /** @type {Object[]} */
        let arrDrinks = []

        for (const label of arrLabels) {
            const drinksRes = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${label}`)
            const drinksData = await drinksRes.json()
            arrDrinks = [...arrDrinks, ...drinksData.drinks]
        }
        
        return arrDrinks
    }

    return {
       cocktails: fetchMainMenu(),
    }
}

export const actions = {
    search: async ({request}) => {

        const formData = await request.formData()
        const searchTerm = formData.get("searchTerm")



        let searchTermString = searchTerm.toString()

        // // Check for so it contains only letters
        // const letterRegex = /^[A-Za-z\s]+$/;
        // if (!letterRegex.test(searchTermString)) {
        //     return fail(400, {
        //         message: "Error: Search term can not contain digits",
        //         attributes : {searchTerm}
        //     })
        // }

        searchTermString = searchTermString.split(" ").join("_");            // Replace " " by "_" for link

        const drinksRes = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        const drinksDataObj = await drinksRes.json()
        const drinksData = drinksDataObj.drinks

        let message;
        if (drinksData) {
            message = `Success! ${drinksData.length} listings found and added to the page`
        } else {
            return fail(400, {
                message: "Oh no! Nothing was found",
                attributes : {searchTerm}
            })
        }

        return {
            data: drinksData,
            attributes: {searchTerm},
            message : message
        }
    },

    card: async ({request}) => {
        console.log("here");
        return {
            message : "Success! Card was added to the page"
        }
    }
}