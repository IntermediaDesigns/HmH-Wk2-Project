// Select random word
let word1 = 'javascript';
let word2 = 'object';
let word3 = 'boolean';
let word4 = 'variable';
let word5 = 'waffles';

// A word is chosen at random from a pool of, at minimum, five words.
let randomWord = Math.floor(Math.random() * 5) + 1;
let word;

if (randomWord === 1) {
    word = word1;
} else if (randomWord === 2) {
    word = word2;
} else if (randomWord === 3) {
    word = word3;
} else if (randomWord === 4) {
    word = word4;
} else if (randomWord === 5) {
    word = word5;
}

console.log(word);

// Initialize wrong guesses
let wrongGuess = 0;

// A player types in a letter as a guess, if they are correct the letter is filled in and if they are incorrect one emoji appears in the prompt.
// If the user guesses all the correct letters, they win.
while (censored.includes('❓')) {
    let guess = prompt("I'm thinking of a word. 🤔" + '\n\nWord to Guess: ' + censored + '\n\nWould you like to guess a letter?');

    // Check if guess of the full word is correct or not
    if (guess === word) {
        censored = word;
        break;
    }

    // Check if the letter is in word
    if (word.includes(guess)) {
        // Reveal guessed letter
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                censored = censored.substr(0, i) + guess + censored.substr(i + 1);
            }
        }
    }

// If the user gets three incorrect guesses, they lose.
    if (guess !== word) {
        wrongGuess++;
        if (wrongGuess === 3) {
            alert('Game over! ❌ The word was: ' + word);
            return;
        } else {
            alert('Wrong guess! You have ' + (3 - wrongGuess) + ' attempts left.');
        }
    } else {
        alert('Congratulations! You guessed the word: ' + word);
    }
}


// Censor the word but reveal specific letters
let censored = censorLetters(word);

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

// Ask player if they want to play again
let playAgain = prompt('Do you want to play again? (yes/no)');
if (playAgain !== 'yes') {
    return;
}












/*  3 Wrong guesses.

    First wrong answer: head and post ☹⅂

    Second: body  \|／ /\

    Third: "Hangman!”  𖨆⅂

    
*/


