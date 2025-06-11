var word = "sujith";
console.log(word.length);


/* the goal of this code is to print "You have written 182 characters, you have -42 characters left".
Thats pretty simple and below is the code on how to do that.*/

var yourWords = prompt("Enter your twitter post here: ");
var totalAllowedWords = 140;
var wordsLeft = totalAllowedWords - yourWords.length;
alert("You have written "+yourWords.length+ "characters, you have "+ wordsLeft + " characters left.")