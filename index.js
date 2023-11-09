// A word is chosen at random from a pool of, at minimum, five words.
let playing = true;
let guesses = 3;
let playAgain = true;


// Start Game 
// Random Words
let word1 = 'javascript';
let word2 = 'object';
let word3 = 'boolean';
let word4 = 'variable';
let word5 = 'waffles';

// Select random word
let word = eval('word' + (Math.floor(Math.random() * 5) + 1));



// Censor letters
// The following characters are automatically populated in the chosen random word: 'r', 's', 't', 'l', 'n', 'e'.
/*function censorLetters(str){
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
}*/

let censored = '❓'.repeat(word.length);

while (censored.includes('*')) {
    // Player's guess
    let guess = prompt("I'm thinking of a word. " + 'Censored word: ' + censored + '\nWould you like to guess a letter?');

    // Check if guess is in word
    if (word.includes(guess)) {
        // Reveal guessed letter
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                censored = censored.substr(0, i) + guess + censored.substr(i + 1);
            }
        }
    } else {
        alert('Sorry, the word does not include the letter ' + guess + '.');
    }
}

alert('Congratulations! You guessed the word: ' + word);
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


