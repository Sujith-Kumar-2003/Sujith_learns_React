var gamePattern = [];
var buttonColors = ["red", "blue","green","yellow"];
var userClickedPattern = [];
var level = 0;
var started = false;

function playSound(name){
        let sound = new Audio("./sounds/" + name +".mp3")
        sound.play();

}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}


function nextSequence() {
    userClickedPattern = [];
    level++;
    started = true;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

}

$(".btn").on("click", function () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length - 1);
});



function checkAnswer(currentLevel){
if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function(){
        nextSequence()
    },1000);
        }
}
else{
    var wrong = new Audio("./sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
    },200)
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
}
    

}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

$(document).on("keydown", function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});
    


















// $("." +randomChosenColor).fadeOut(400).fadeIn(400)
// var blue = new Audio("./sounds/blue.mp3");
// $("." +randomChosenColor).on("click",function(){
//     blue.play();
// })




// var blue = new Audio("./sounds/blue.mp3");
// var green = new Audio("./sounds/green.mp3");
// var red = new Audio("./sounds/red.mp3");
// var wrong = new Audio("./sounds/wrong.mp3");
// var yellow = new Audio("./sounds/yellow.mp3");

// $(".blue").on("click",function(){
//     blue.play();
// })
// $(".green").on("click",function(){
//     green.play();
// })
// $(".red").on("click",function(){
//     red.play();
// })
// $(".wrong").on("click",function(){
//     wrong.play();
// })
// $(".yellow").on("click",function(){
//     yellow.play();
// })