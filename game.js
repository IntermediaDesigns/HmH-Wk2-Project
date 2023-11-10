// List of words
let word1 = 'javascript';
let word2 = 'object';
let word3 = 'boolean';
let word4 = 'variable';
let word5 = 'waffles';

while (true) {
// Select random word
       let word = eval('word' + (Math.floor(Math.random() * 5) + 1));

// The following characters are automatically populated in the chosen random word: 'r', 's', 't', 'l', 'n', 'e'.

       let censored = '❓'.repeat(word.length);


       while (censored.includes('❓')) {
    // Player's guess
    let guess = prompt("I'm thinking of a word. 🤔" + '\n\nCensored word: ' + censored + '\n\nWould you like to guess a letter?');

    

    // Check if guess is the full word
    if (guess === word) {
       censored = word;
       break;
   }

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

// # of wrong guesses
let wrongGuesses = 3;

if (wrongGuesses === 3) {
       alert('Game over! ❌ The word was: ' + word);
   } else {
       alert('Congratulations! You guessed the word: ' + word);
   }

// Ask player if they want to play again
let playAgain = prompt('Do you want to play again? (yes/no)');
if (playAgain !== 'yes') {
    break;}

}