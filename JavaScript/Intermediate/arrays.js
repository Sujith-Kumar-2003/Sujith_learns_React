var first_array = [1,3,5,6,7,78,1,4]

for (var i in first_array){
    console.log(i);
}

console.log("Size of the arrayn is " + first_array.length)

var guestList = ["Sujith","Jack","Tyler","Jules","Rue","Frank"]

var guestName = prompt("Please tell me your name");

if (guestList.includes(guestName)){
    console.log("Welcome to the party");
}
else{
    console.log("Sorry you are not on the guest list, Next time.")
}

