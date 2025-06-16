function HouseKeeper(name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.clean = function clean(){
        console.log("Cleaning in Progress");
    }
}
// Constructor function needs to have a capitalized name

var housekeeper1 = new HouseKeeper("Nigesh", 17, true, ["English, Tamil"]);
console.log(housekeeper1.languages);
console.log(housekeeper1.age);

var housekeeper2 = new HouseKeeper("naresh", 19, false, ["Hindi, Tamil"]);
console.log(housekeeper2.languages);
console.log(housekeeper2.age);


function HouseMaid(name, yearsOfExperience, likes){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.likes = likes;
}

var houseMaid1 = new HouseMaid("Jean" , 12, ["fucking", "licking", "cleaning"]);
var houseMaid2 = new HouseMaid("Jeanette", 4, ["bathroom","cooking","washing"]);

console.log(houseMaid1.likes[1]);
housekeeper1.clean();