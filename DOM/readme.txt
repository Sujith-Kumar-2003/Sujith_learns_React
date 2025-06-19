Always put the JS just before the body tag ends or closes.
This is because, if the javascript code takes a lot of time to run, 
atleast the website will load before.
SO the user has something to look at before the code runs.

INTRODUCTION TO DOCUMENT OBJECT MODEL.(DOM)

document

getElementById
getElementByClass
getElementByTagName

THese might return a list of arrays
Which then you can choose by specifying the index

getElementById("list")[2].innerHTML = "Sujith";

document.querySelector("#list a")
this returns the element a with anchor tag inside the element with id list/

if you want to select all fo teh element wiht that specific querySelector
you should use

document.querySelectorAll("#list a");
this will return an array as well.

document.querySelectorAll("#list a")[2].style.color = "green";


NEXT is the Seperation of Concern:
document.querySelector("button").classList.add("invisible");

this adds the class invisible to the class button

class = "button invisible"

YOu can also remove it;

document.querySeletor("button").classList.remove("invisible");

class = "button"

You can also toggle which will either add or remove;
it just negates

document.querySelector("button").classList.toggle("invisible");

class = "button invisible"

document.querySelector("button").classList.toggle("invisible");

class = "button"

document.querySelector("button").classList.toggle("invisible");

class = "button invisible"

This could be useful where in the css you put the invisible

.invisible{
    visibility: "hidden"
}

So each time you do the toggle it either disappears or appears.

this could come in handy if you want this to change in the future after a specific time
in the future. change an element or something/

TASk:
create a class huge in css and it changes the fontsize to 10rem
\

NEXT IS THE TEXT CONTENT

You can set the values to a html element using the:
.innerHTML
.textContent

Both of them similar but wiht a small difference;
lets say you just want to change the content instead of hello,
you want to h1 to be GOOD BYE.

document.getElementById("h1").textContent = "GOOD BYE";

This changes the content

YOU can also do it with innerHTML too and also you can do more.
YOu can add HTML code on the fly.

document.getElementById("h1").innerHTML = "<em> Good bye </em>";
this will not only change the content to good bye but also apply the emphasized in there.

document.querySelector("h1").innerHTML = "<a href = 'www.google.com'> Google </a>"

document.querySelector("a").attributes;
This will display all the attributes of the a tag.
This will return all the attributes in an array.

you can then change the attribute using :
document.querySelector("a").getAttribute("href");

document.querySelector("a").getAttribute("href") = "www.bing.com";
This will point you to bing instead of google

You can also set the attribute;
document.querySelector("a").setAttribute("href","https://www.bing.com");
setAttribute takes 2 inputs ("the attribute" , and "the new value" );

setTimeout(function(){curr.classList.remove("pressed");}, 500);
