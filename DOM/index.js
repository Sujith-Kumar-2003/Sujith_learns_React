document.getElementById("h1").onclick = function () {
    alert("Hello");
};

document.querySelector(".new1").onclick = function () {
    alert("Hellow");
};

var H1 = document.firstElementChild.lastElementChild.firstElementChild;
console.log(H1.style.color); //This is a getter

H1.style.color = "red"; // THis is a setter
H1.innerHTML = "Sujith is a fraud.";

document.querySelector("button").click() //This clicks the button
