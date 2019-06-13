var wins = parseInt(document.getElementById("wins").innerHTML);
var losses = parseInt(document.getElementById("losses").innerHTML);
var guessesRemaining = parseInt(document.getElementById("guessesRemaining").innerHTML);
var guessList = document.getElementById("guessList").innerHTML;
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = alphabets[Math.floor(Math.random() * 26) + 1];
console.log(randomLetter);
document.onkeyup = function (event) {
    if (event.key == randomLetter) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
    }
    else {
        guessesRemaining--;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
        document.getElementById("guessList").innerHTML = guessList + ", " + event.key;
        if (guessesRemaining == -1) {
            losses++;
            document.getElementById("losses").innerHTML = losses;
        }
    }
}