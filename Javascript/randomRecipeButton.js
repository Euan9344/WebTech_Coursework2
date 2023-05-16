    // Selects button ID
    var randomRecipeButton = document.getElementById("random-recipe-button");
    //Event listener waiting for Button to be click to activate script
    randomRecipeButton.addEventListener("click", function() {
    // Array of recipe links/paths
    var recipes = [
        "./HTML/Recipes/Breakfasts/breakfastMuffin.html",
        "./HTML/Recipes/Breakfasts/ulsterFry.html",
        "./HTML/Recipes/Desserts/moltencakes.html",
        "./HTML/Recipes/Desserts/profiteroles.html",
        "./HTML/Recipes/Dinners/airfryChicken.html",
        "./HTML/Recipes/Dinners/salmon.html"
    ];
    // Generate a random index based on the array length
    var randomIndex = Math.floor(Math.random() * recipes.length);
    // Gets the random recipe page
    var randomRecipe = recipes[randomIndex];
    // Redirect the user to the random URL
    window.location.href = randomRecipe;
});