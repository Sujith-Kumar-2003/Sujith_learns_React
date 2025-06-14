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
