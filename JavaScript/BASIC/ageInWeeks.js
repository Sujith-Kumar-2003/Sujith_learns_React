function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    var totalDays = 90 * 365;
    var inDays = totalDays - age * 365;
    var totalWeeks = 90 * 52;
    var inWeeks = totalWeeks - age * 52;
    var totalMonths = 90 * 12;
    var inMonths = totalMonths - age * 12;
    
    console.log("You have " + inDays + " days, " + inWeeks + " weeks, and " + inMonths + " months left." )
    
    
    
    
/*************Don't change the code below**********/
}
lifeInWeeks(56);

