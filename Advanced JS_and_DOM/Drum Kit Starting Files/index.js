
// Button PRess.

// .addEventListener
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var butt = this.innerHTML;
        playSound(butt);
        buttonAnimation(butt);
    });
}

// Key board press.
document.addEventListener("keydown",function (event){
    playSound(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
var curr = document.querySelector("." + currentKey);
curr.classList.add("pressed");
setTimeout(function(){curr.classList.remove("pressed");}, 100);

}

function playSound(key){

        switch (key){
            case "w":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break; 
            case "s":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play()
                break;
            case "l":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play()
                break;
        }
    }



// document.querySelector(".w").addEventListener("click", handleClick);
// document.querySelectorAll(".a").addEventListener("click", handleClick);
// document.querySelector(".s").addEventListener("click", handleClick);
// document.querySelector(".d").addEventListener("click", handleClick);
// document.querySelector(".j").addEventListener("click", handleClick);
// document.querySelector(".k").addEventListener("click", handleClick);
// document.querySelector(".l").addEventListener("click", handleClick);

// document.addEventListener("keydown",function (event){
//     console.log(event.key);
// })

// THis takes 2 parameters event, listener
// function handleClick(){
//     alert("This button is clicked");
// }

// Anonymous function
// This means they can be called only on that line without the use of any name

// liike this 
// document.querySelector(".w").addEventListener("click",function(){
//     alert("w button is clicked")
// })

// var audio = new Audio("./sounds/crash.mp3");
// audio.play();



