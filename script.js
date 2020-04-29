// https://api.openbrewerydb.org/breweries  http://localhost:8088/food


// fetch("https://api.openbrewerydb.org/breweries")
// .then(brewries => brewries.json)
// .then(parsedBrewriesArray => {
//     console.table(parsedBrewriesArray)

//     console.log("this is the console.log", parsedBrewriesArray)
// })


// fetch("http://localhost:8088/food")
// .then(r => r.json())
// .then(parsedResponse => {
//     console.table(parsedResponse)
// })

//Fetches the database.json file, parses the foods into an array, and cycles through each food in the array
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            
            //Fetches the openfoodfacts api, parses each food according to the barcode into an array, and adds an HTML element to the "foodList" section
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    if (productInfo.product.ingredients_text) {
                        food.ingredients = productInfo.product.ingredients_text
                      } else {
                        food.ingredients = "no ingredients listed"
                      }

                      food.countries = productInfo.product.countries

                      if (productInfo.product.nutriments.energy_serving) {
                          food.calories = productInfo.product.nutriments.energy_serving
                      } else {
                          food.calories = "calories per serving not listed"
                      }
                      
                      if (productInfo.product.nutriments.sugars_serving) {
                        food.sugar = productInfo.product.nutriments.sugars_serving
                    } else {
                        food.sugar = "sugar per serving not listed"
                    }

                    if (productInfo.product.nutriments.fat_serving) {
                        food.fat = productInfo.product.nutriments.fat_serving
                    } else {
                        food.fat = "fat per serving not listed"
                    }


                      //fat per serving
                      //sugar per serving
                    console.log(productInfo.product.nutriments.fat_serving)
                      
                      document.querySelector("#foodList").innerHTML += `<div class="food-item"><h1 class="food-name">${food.name}</h1><p class="food-ethnicity">${food.ethnicity}</p><p class="food-category">${food.category}</p><p>${food.ingredients}</p><p>${food.countries}</p><p><b>Calories per serving:</b> ${food.calories}</p><p><b>Sugar per serving:</b> ${food.sugar}</p><p><b>Fat per serving:</b> ${food.fat}</p></div>`
                })
        })
    })

