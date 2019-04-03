// Hangman Game
// -----------------
// variable with number of wins
var score = 0;
// an array of the words to be guessed
var heroes = ["hulk", "hawkeye", "spiderman", "thor"];
// a loop that can adjust for the lengths of different words
var word = heroes[Math.floor(Math.random() * heroes.length)];
// the quantity of letters should be displayed by underscores "_"
var wordToGuess = [];
for (var i = 0; i < word.length; i++){
    wordToGuess[i] = "_";
}
var remaining = word.length;
// Game loop
while(remaining > 0){
    document.onkeyup = function(event){
        var userInput = event.key.toLowerCase();
        
// an if statement that compares the userGuess vs the secret word
//    else if (playerGuess.length !== 1){
        // alert("Only one letter at a time");
        if {
            for (var j = 0; j < word.length; j++){
                if (word[j] === playerGuess){
                    wordToGuess[j] = playerGuess;
                    remaining--;
                    if (remaining == 0){
                        break;
                    }
                    }
                }
        }
    }
}
alert(wordToGuess.join(" "));
alert("the answer was " + word);
// number of wins
// function updateScore() {
//     document.getElementById("wins").innerHTML = "Wins: " + score;
  //}
// number of guesses remaining
// letters already guessed
// press any key to start (game logic is an object and is called by this function)
// event listener for user input
// document.onkeyup = function(timesTriedFn) {
//     var timesTried = a
//}