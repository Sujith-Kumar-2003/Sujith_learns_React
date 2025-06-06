function getMilk(bottles) {
    var cost = bottles % 1.5;
    bottles -= cost;
    var newt = bottles / 1.5;
    console.log("Total bottles bought: " + newt);
    return cost;
}

var change = getMilk(4);
console.log("Total change made is: "+ change)

