// A word is chosen at random from a pool of, at minimum, five words.
let userGuess = true;
let letters = /a-z/
let guesses = 3;
let wrongGuess;
let playAgain = true;

// Random Words


// Start Game - Pick random word
while (playing) {
       starting = prompt(
              "I'm thinking of a word. Would you like to guess a letter?"
            );
            let word = words[Math.floor(Math.random() * words.length)];

            let answer = [];
              for (var i = 0; i < word.length; i++) {answer[i] = "_";}

              if (starting === "word") {word();}
                     else if (starting === "javascript") {javascript();}
                     else if (starting === "object") {object();}
                     else if (starting === "boolean") {boolean();}
                     else if (starting === "variable") {variable();}
                     else if (starting === "waffles") {waffles();}
}

// Words
function word() {
       let firstWord = prompt("Enter the first number:");
       let secondWord = prompt("Enter the second number:");
       let thirdWord = prompt("Enter the second number:");
       let fourthWord = prompt("Enter the second number:");
       let fifthWord = prompt("Enter the second number:");
       let sixthWord = prompt("Enter the second number:");
       
       let guess = firstWord * secondWord;
              alert(`${firstNumber} * ${secondNumber} = ${guess}`)
}




// Player guessing
let remainingLetters = word.length;
while (remainingLetters > 0) {
       alert(answer.join("_"));
}


// Player guess correct
function initiateGuess(){
       let correct = chosenWord.match(userSelection);
}





// The following characters are automatically populated in the chosen random word: 'r', 's', 't', 'l', 'n', 'e'.


// A player types in a letter as a guess, if they are correct the letter is filled in and if they are incorrect one rope emoji appears in the prompt.


// If the user guesses all the correct letters, they win.


// If the user gets three incorrect guesses, they lose.

function incorrect(){
       incorrectGuess =  wrongGuess.push(userGuess);
       return incorrectGuess;
       }

// You Lost!








/*  3 Wrong guesses.

    First wrong answer: head and post ☹⅂

    Second: body  \|／ /\

    Third: "Hangman!”  𖨆⅂

    
*/