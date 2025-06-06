function getMilk(bottles) {
    var cost = 5 % 1.5;
    bottles -= cost;
    var newt = bottles / 1.5;
    console.log(newt);
}

getMilk(5);