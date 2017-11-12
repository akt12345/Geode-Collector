// SET THIS UP SUNDAY AM - comments first then start my coding..DESIGN WILL DO AFTER CODE WORKS


// Creates an array (Create Number Array) that lists out all of the options (Number computer is thinking of) call this alphabetLetters
    var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Variables - Creating variables to hold the number of wins, losses, guesses left, guesses so far and user guess set as null.
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var userGuess = null;

// Randomly chooses a choice from the options array. This is the Computer's guess.
    var letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);

// This function is run whenever the user presses a key.
    document.onkeyup = function(event) {


// This determines which key was pressed. stores in userGuess as null :)
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


// User Guess is added to GuessesSoFar - make not sure already picked - alphabet consistancy
    if (guessesSoFar.indexOf(userGuess) < 0 && alphabetLetters.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    // if new then decrease by 1
    guessesLeft--;
    }


// if letterToBeGuessed is same as userGuess then its a winner / reset guessesLeft to 9 / empty guessesSoFar / new random computer choice
    if (letterToBeGuessed == userGuess) {
    wins++;
    console.log("You lucky duck, you WON!");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }



// if GuessesLeft turns 0 then its a Loss / reset guessesLeft to 9 / empty guessesSoFar / new random computer choice
    if (guessesLeft == 0) {
    losses++;
    console.log("Sorry you lost. Try again :)");
    guessesLeft = 9;
    guessesSoFar = [];
    letterToBeGuessed = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
    console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + letterToBeGuessed);
    }


// Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/guesses left/ your guesses so far
          var html =
          "<p>Guess what letter I'm thinking of?</p>"+
          "<p>Wins: " + wins + "</p>" +
          "<p>Losses: " + losses + "</p>" +
          "<p>Guesses left: " + guessesLeft + "</p>" +
          "<p>Your guesses so far: " + guessesSoFar + "</p>";
          // Set the inner HTML contents of the #game div to my index.html
           document.querySelector("#game").innerHTML = html;
  }

//The end - whew wee
