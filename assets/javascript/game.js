//bank of words available
var words;
words = ['surf',
        'waves',
        'gnarly',
        'dude',
        'beach',
        'bikinis',
        'boardshorts',
        'ocean'];

//random word chosem
var word = words[Math.floor(Math.random() * words.length)];

//answer prompt is filled with underscores for letter placement such as _ _ _ _
var  answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] ="_";}
        var remainingLetters = word.length;

// user selects a letter

// if letter is in word, it goes in place

// if letter is not in word, then the "number of guesses" goes down by one (starts with 8)

// if user guesses word before all guesses are up, then "win" increases by one

// if user does not guess the word in the required number of guesses, then a hangman image appears/some sort of loss statement
