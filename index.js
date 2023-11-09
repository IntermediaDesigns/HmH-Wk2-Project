// A word is chosen at random from a pool of, at minimum, five words.
let userGuess = true;
let guesses = 3;
let wrongGuess;
let playAgain = true;

// Start Game 
while (playing) {
       starting = prompt(
              "I'm thinking of a word. Would you like to guess a letter?"
            );
       }


// Random Words
function randomWord(){
       let word = "";
       let random = Math.ceil(math.random()*5);

              if(random === 1){word = "javascript"}
              if(random === 1){word = "object"}
              if(random === 1){word = "boolean"}
              if(random === 1){word = "variable"}
              if(random === 1){word = "waffles"}
       return word;
}

// Censor letters
// The following characters are automatically populated in the chosen random word: 'r', 's', 't', 'l', 'n', 'e'.
function censorLetters(str){
       let censorSTR = "";

       for(let i = 0; i < str.length; i++){
              if(
                     str[i] === "r" ||
                     str[i] === "s" ||
                     str[i] === "t" ||
                     str[i] === "l" ||
                     str[i] === "n" ||
                     str[i] === "e"){
                     censorSTR += str[i];
                     } 
                     else{
                            censorSTR += "❓"
                     }
       }
       return censorSTR;
}


// Player guessing
// A player types in a letter as a guess, if they are correct the letter is filled in and if they are incorrect one rope emoji appears in the prompt.
/* let remainingLetters = word.length;
while (remainingLetters > 0) {
       alert(answer.join("_"));
}


// Player guess correct
// If the user guesses all the correct letters, they win.
let guess = prompt('Guess a letter:');
function initiateGuess(){
       let correct = chosenWord.match(userSelection);
}




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


