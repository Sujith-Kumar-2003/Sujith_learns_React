$("h1").html("Sujith is a VIBE Coder");
$("h1").css("color", "violet");

// Also you can console log any values to the terminal or the alert by just using a single property
// for example console.log($("h1").css("color"));
// or console.log($("h1").css("font-size"));
console.log($("h1").css("font-size"));  // 32px
// $("h1").css("font-size","138px");

// It is always not the best practice to put the css inside the javascript code.\
// So what you can do is, put everything inside the css and you can add it as a class.

$("h1").addClass("big-title");
// This was this looks cleaner.

// YOu can also remove class
$("h1").removeClass("big-title");

// YOu can add multiple classes too, like $("h1").addClass("big-title margin-50")
//  Put it inside the single quatation but seperated by a space.

$("h1").addClass("big-title margin-50")

// Also there is a .hasClass method that returns true or false/.




//Next is the .text() method which can be used to change the text contained inside the tag.(element.)

$("button").text("Please dont click me");
$("h1").html("<em> This things is gonna rock the future.</em>"); //(emphaszied is plain italic).

// You can also tap into the attributes of element;
// for example lets say there is a image, whihc has a src or a <a> wiht href = "https://www.google.com", you can change that.$

// .attr() to get the attribute.

console.log($("img").attr("alt")); //a drum (YOu are getting the value here.)

$("a").attr("href","https://www.bing.com"); //(You are setting the value here.)
$("img").attr("alt","Just a beautiful drum");
console.log($("img").attr("alt")); //Just a beautiful drum

// REmember classes are also attributes, you can tap into that as well.

// var allButtons = document.querySelectorAll("button").length;

// for (var i = 0; i < allButtons; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// } Using basic javascript


$("button").click(function(){
    $("h1").css("color","purple");
})
// Same code using jquery.

// You can even add any event

$("input").keydown(function(event){
    $("h1").text(event.key)
})

// You can aslo put the $(document) to get input of anything entered on the screen.

// $(document)./// and so on

// Also there is one more thing.
// on() method 

$("h1").on("mouseover",function(){
    $("h1").css("color","green");
})
// So the on takes 2 parameters, the event listener fucntion and the function() of what to do when the event occurs.

// There are 4 more methods, (before,after, prepend,append).
$("h1").before("<button>New button</button>");
// Before means before the opening tag of the element.

$("h1").after("<button> A button added after </button>");

$("h1").prepend("'Hi' is added before");
{/* <Prepend means inside the selected element but before it, we have selected h1 so it will be added inside the h1 tag but beofre all the conetent in it. */}

$("h1").append("<button>A button attached to the h1</button>")

// $("button").remove();(This will remove all of the buttons from there.)



// NEXT is teh ()HIDE, SHOW, toggle(),fadeIn(),fadeOut(), fadeToggle();,slideUp();slideDown(); slideToggle();
// slideToggle can be useful in a dropdown menubar.
// $("button").on("click",function(){
//     $("h1").slideToggle();
// }) // THis is a prebuilt funciton , also u can write your own.

$("button").on("click",function(){
    $("h1").animate({opacity:0.3,margin:"20%"}) // but you can only select numeric values not strings.
}) // YOu can add percentage as a string.

// You can also chain the methods too
$("button").on("click",function(){
    $("h1").slideUp(duration=1000).slideDown(duration = 700).animate({opacity:0.3,margin:"20%"}) // but you can only select numeric values not strings.
}) 

