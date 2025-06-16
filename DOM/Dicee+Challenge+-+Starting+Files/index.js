var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);


var dice = ["./images/dice1.png","./images/dice2.png","./images/dice3.png",
    "./images/dice4.png","./images/dice5.png","./images/dice6.png"];

var finalImg1 = dice[randomNumber1];
var finalImg2 = dice[randomNumber2];


document.querySelector(".img1").setAttribute("src", finalImg1);
document.querySelector(".img2").setAttribute("src", finalImg2);

function winner(){
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins";
    }
    else if (randomNumber2 > randomNumber1){
                document.querySelector("h1").innerHTML = "Player 2 wins";
    }
    else if (randomNumber1 === randomNumber2){
            document.querySelector("h1").innerHTML = "Draw!";
    }
}

winner();