// document.body.style.backgroundColor = "blue";

console.log("called");
var divg = document.querySelectorAll("div.g");
var s;
s = divg;

for (i = 0; i < divg.length; i++) {
    if (i % 2 == 1) {
        s[i].setAttribute("class", "prey");
    }
}

elements = document.querySelectorAll(".prey");

// add class to all chosen elements
for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("prey");
}

var t = setTimeout(function () {
    // add class to all chosen elements
for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add("prey-fade");
}
}, 500);