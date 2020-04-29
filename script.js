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

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        parsedFoods.forEach(food => {
            document.querySelector("#foodList").innerHTML += `<div class="food-item"><h1 class="food-name">${food.name}</h1>`+" "+`<p class="food-ethnicity">${food.ethnicity}</p>`+" "+`<p class="food-category">${food.category}</p></div>`            
        })
    })

