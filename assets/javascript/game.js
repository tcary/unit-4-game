// The player will have to guess the answer, just like in Word Guess.This time, though, the player will guess with numbers instead of letters.


// There will be four crystals displayed as buttons on the page.


// The player will be shown a random number at the start of the game.


// When the player clicks on a crystal, it will add a specific amount of points to the player's total score.

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.



// The player wins if their total score matches the random number from the beginning of the game.


// The player loses if their score goes above the random number.


// The game restarts whenever the player wins or loses.

// When the game begins again, the player should see a new random number.Also, all the crystals will have four new hidden values.Of course, the user's score (and score counter) will reset to zero.



// The app should show the number of games the player wins and loses.To that end, do not refresh the page as a means to restart the game.





//     Option 1 Game design notes


// The random number shown at the start of the game should be between 19 - 120.


// Each crystal should have a random hidden value between 1 - 12.


var crystalNumbers;

var crystals = ["assets/images/crystal1.png", "assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.jpg", "assets/images/crystal5.jpg", "assets/images/crystal6.png", "assets/images/crystal7.jpg", "assets/images/crystal8.jpg"];
var counter = 0;
var theNumber;
var gameOver = false;
var winner = 0;
var loser = 0;


function startGame() {
    theNumber = Math.floor(Math.random() * 102) + 19;

    console.log(theNumber);
    $("#number-to-guess").text(theNumber);
    for (i = 0; i < 4; i++) {
        crystalNumbers = Math.floor(Math.random() * 12) + 1;
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", crystals[Math.floor(Math.random() * crystals.length)]);
        imageCrystal.attr("data-crystalvalue", crystalNumbers);
        $(".crystals").append(imageCrystal);
    }
    updateScreen();
}

function updateScreen() {
    $("#wins").text("Wins " + winner);
    $("#losses").text("Losses " + loser);
}
$(".crystals").on("click", ".crystal-image", function () {
    console.log($(this));
    counter += $(this).data("crystalvalue");
    console.log(counter);
    $("#your-score").text(counter);
    isWinner();
})
function isWinner() {
    if (counter === theNumber) {
        alert("You win!");
        winner++;
        $("#wins").text("Wins " + winner);
        gameOver = true;
        gameReset();
    }
    else if (counter > theNumber) {
        alert("You lose!!");
        loser++;
        $("#losses").text("Losses " + loser);
        gameOver = true;
        gameReset();
    }

}
function gameReset() {
    counter = 0;
    $("#your-score").text(counter)
}
startGame();