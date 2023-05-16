    // Selects button ID
    var randomDessertButton = document.getElementById("random-dessert-button");
    //Event listener waiting for Button to be click to activate script
    randomDessertButton.addEventListener("click", function() {
    // Array of recipe links/paths
    var desserts = [
        "./Recipes/Desserts/moltencakes.html",
        "./Recipes/Desserts/profiteroles.html",
    ];
    // Generate a random index based on the array length
    var randomIndex = Math.floor(Math.random() * desserts.length);
    // Gets the random recipe page
    var randomDessert = desserts[randomIndex];
    // Redirect the user to the random URL
    window.location.href = randomDessert;
});