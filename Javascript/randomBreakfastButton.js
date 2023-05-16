    // Selects button ID
    var randomBreakfastButton = document.getElementById("random-breakfast-button");
    //Event listener waiting for Button to be click to activate script
    randomBreakfastButton.addEventListener("click", function() {
    // Array of recipe links/paths
    var breakfasts = [
        "./Recipes/Breakfasts/breakfastMuffin.html",
        "./Recipes/Breakfasts/ulsterFry.html"
    ];
    // Generate a random index based on the array length
    var randomIndex = Math.floor(Math.random() * breakfasts.length);
    // Gets the random recipe page
    var randomBreakfast = breakfasts[randomIndex];
    // Redirect the user to the random URL
    window.location.href = randomBreakfast;
});