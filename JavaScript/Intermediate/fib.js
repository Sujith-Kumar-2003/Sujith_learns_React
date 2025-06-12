function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    if (n === 1){
        return [0]
    }
    else if(n === 0){
        return []
    }

    else if (n === 2){
        return [0,1];
    }
    else{
    var a = 0;
    var b = 1;
    var c = [];
    c.push(a);
    c.push(b);
    
    for (var i = 0; i < n-2;i++){
        output = a + b;
        c.push(output)
        a = b;
        b = output;
    }

    console.log(c);
    }
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}

fibonacciGenerator(3);
