var op = [];
var count = 1;

function fizzB(){
    // if (count % 15 === 0){
    //     op.push("FizzBuzz");
    // } 
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
    console.log(op);
}
fizzB();