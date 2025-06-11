var weight = prompt("Enter your weight in kg here");
var height = prompt("Enter your height in centimeters here");
height = height/100;

var bmi = Math.round(weight / (Math.pow(height,2)));

console.log(bmi)