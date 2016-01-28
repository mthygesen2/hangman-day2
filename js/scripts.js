
function HangmanWord () {
  this.word = this.randomSelect();
  this.length = this.word.length;
  this.letters = this.word.split("");
}
//if mistakeCounter equals 6, game over if correctCounter equals length of word they will win
function Game () {
  this.gameWord = new HangmanWord();
  this.mistakeCounter = 0;
  this.correctCounter = 0;
}
//wordBank for random selection at the start of the game
HangmanWord.prototype.randomSelect = function () {
  var wordBank = ["hello"];
  var randomWord = wordBank[Math.floor(Math.random()* wordBank.length)];
  return randomWord;
};
//player selects letter and this will check if the letter is in the word, true or false - adds one to mistakeCounter
Game.prototype.letterSelect = function (letter) {
  var word = this.gameWord.word;
  for(var index = 0; index < word.length; index ++) {
    if (word[index] === letter) {
      return true;
    } else {
      this.mistakeCounter += 1;
      return false;
    }
  }
};
//if the above is true counts the number of time the letter appears in the word - adds one to correctCounter
Game.prototype.letterCounter = function(letter) {
  var letterCount = []
  var word = this.gameWord.word;
  for(var index = 0; index < word.length; index ++) {
    if(word[index] === letter) {
      letterCount.push(index);
    }
  }
  this.correctCounter += letterCount.length;
  return letterCount;
};

Game.prototype.isGameLost = function() {
  if(this.mistakeCounter === 6) {
    return true;
  } else if(this.mistakeCounter < 6) {
    return false;
  }
};
