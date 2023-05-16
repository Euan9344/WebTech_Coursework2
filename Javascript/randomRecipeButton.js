    // Selects button ID
    var randomRecipeButton = document.getElementById("random-recipe-button");
    //Event listener waiting for Button to be click to activate script
    randomRecipeButton.addEventListener("click", function() {
  
    // Array of recipe links/paths
    var recipes = [
        "./Recipes/Breakfasts/breakfastMuffin.html",
        "./Recipes/Breakfasts/ulsterFry.html",
        "./Recipes/Desserts/moltencakes.html",
        "./Recipes/Desserts/profiteroles.html",
        "./Recipes/Dinners/airfryChicken.html",
        "./Recipes/Dinners/salmon.html"
    ];

    // Generate a random index based on the array length
    var randomIndex = Math.floor(Math.random() * recipes.length);

    // Gets the random recipe page
    var randomRecipe = recipes[randomIndex];

    // Redirect the user to the random URL
    window.location.href = randomRecipe;
});