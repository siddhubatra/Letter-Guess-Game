var wins = parseInt(document.getElementById("wins").innerHTML);
var losses = parseInt(document.getElementById("losses").innerHTML);
var guessesRemaining = parseInt(document.getElementById("guessesRemaining").innerHTML);
var guessList = [];
var alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = alphabets[Math.floor(Math.random() * 26)];
console.log(randomLetter);

document.onkeyup = function (event) {
    guessList.push(event.key);
    document.getElementById("guessList").innerHTML = guessList; //update guess list on HTML

    if (event.key == randomLetter && guessesRemaining > 0) {
        wins++;
        document.getElementById("wins").innerHTML = wins; //update wins on HTML
        guessesRemaining = 9;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining; //update guesses remaining on HTML
        guessList = [];
        document.getElementById("guessList").innerHTML = guessList; //update fresh guess list on HTML
        randomLetter = alphabets[Math.floor(Math.random() * 26)];
        console.log(randomLetter);
    }
    else if (event.key != randomLetter && guessesRemaining > 0) {
        guessesRemaining--;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining; //update lowered remaining guesses on HTML
    }
    else {
        losses++;
        document.getElementById("losses").innerHTML = losses; //update losses on HTML
        guessesRemaining = 9;
        document.getElementById("guessesRemaining").innerHTML = guessesRemaining; //update lowered remaining guesses on HTML
        guessList = [];
        document.getElementById("guessList").innerHTML = guessList; //update fresh guess list on HTML
        randomLetter = alphabets[Math.floor(Math.random() * 26)];
        console.log(randomLetter);
    }

}
