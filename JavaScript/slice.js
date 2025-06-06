// var yourWords = prompt("Enter your twitter post here: ");
// var totalAllowedWords = 140;
// var wordsLeft = totalAllowedWords - yourWords.length;
// alert("You have written "+yourWords.length+ "characters, you have "+ wordsLeft + " characters left.")

var name = "Sujith";
console.log(name.slice(0,4));

// remember the last or end character that you add will not be added in the slice.
// 0 to 4 will not add 4th index in there.

var yourWords = prompt("Enter your twitter post here: ");
var totalAllowedWords = 140;
var wordsLeft = totalAllowedWords - yourWords.length;
alert("You have written "+yourWords.length+ "characters, you have "+ wordsLeft + " characters left.")
console.log(yourWords.slice(0,140));
console.log(yourWords.toLowerCase());

console.log(yourWords.toUpperCase());



