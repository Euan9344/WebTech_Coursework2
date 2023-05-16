    // Selects button ID
    var randomDinnerButton = document.getElementById("random-dinner-button");
    //Event listener waiting for Button to be click to activate script
    randomDinnerButton.addEventListener("click", function() {
    // Array of recipe links/paths
    var dinners = [
        "./Recipes/Dinners/airfryChicken.html",
        "./Recipes/Dinners/salmon.html"
    ];
    // Generate a random index based on the array length
    var randomIndex = Math.floor(Math.random() * dinners.length);
    // Gets the random recipe page
    var randomDinner = dinners[randomIndex];
    // Redirect the user to the random URL
    window.location.href = randomDinner;
});