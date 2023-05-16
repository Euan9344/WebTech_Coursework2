// Get the button element
var randomRecipeButton = document.getElementById("random-recipe-button");

// Add event listener to the button
randomRecipeButton.addEventListener("click", function() {
    // Generate a random number within a range (adjust the range as needed)
    var randomNumber = Math.floor(Math.random() * 3) + 1;

    // Create an array of URLs
    var recipes = [
        "breakfastMuffin.html",
        "ulsterFry.html",
        "moltencakes.html",
        "profiteroles.html",
        "airfryChicken.html",
        "contact.html"
    ];

    // Generate a random index based on the array length
    var randomIndex = Math.floor(Math.random() * recipes.length);

    // Get the random URL
    var randomRecipe = recipes[randomIndex];

    // Redirect the user to the random URL
    window.location.href = randomRecipe;
});