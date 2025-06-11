// === is equals
// !== not equals
// > greater than
// < lesser than
// >= greater than or eqaul
// <= lesser than or equal


// === equals check for the value and the data types.

// == equals checks for the value alone and not the data types.

// for example 

var a = 1;
var b = "1";

// THIS PRINTS YES
if (a == b){
    console.log("Yes");
}
else{
    console.log("No");
}

// THIS PRINTS NO
if (a === b){
    console.log("YES")
}
else{
    console.log("NO");
}


// cassynova@MacBookAir Intermediate % node comporators_and_equality.js
// Yes
// NO