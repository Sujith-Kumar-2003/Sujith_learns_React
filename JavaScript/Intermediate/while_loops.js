// var i = 1;

// while(i< 2){
//     console.log("H1");
//     i++;
// }

// FizzBuzz using whiel loop

var op = [];
var count = 1;

function fizzB(){
    while( count <= 100){
    if (count % 3 === 0 && count % 5 ===0){
        op.push("FizzBuzz");
    }
    else if (count % 3 === 0){
        op.push("Fizz");
    }
    else if (count % 5 === 0){
        op.push("Buzz");
    }
    else{
        op.push(count);
    }
    count+=1;
    }
    console.log(op);
}

fizzB();