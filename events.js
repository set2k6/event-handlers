var theDiv = document.getElementById("output-target");
theDiv.addEventListener("click", clickMe);

function clickMe() {
	document.getElementById("output-target").innerHTML += "You clicked on the manipulate me section!";
}

// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

var theHeader= document.getElementById("page-header");
theHeader.addEventListener("mouseover", header);
theHeader.addEventListener("mouseout", header2);

function header() {
  document.getElementById("page-header").innerHTML += "You moved your mouse over the header."
}

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

function header2() {
  document.getElementById("page-header").innerHTML += "You left me!!"
}

// When you type characters into the input field, the output element should mirror the text in the input field.

var input = document.getElementById("keypress-input");

input.addEventListener("keydown", function () {
  theDiv.innerHTML = input.value;
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

var newGuinea = document.getElementById("guinea-pig");

var addColor = document.getElementById("add-color");

addColor.addEventListener("click", function () {
  newGuinea.classList.toggle("blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
var hulkSmash = document.getElementById("make-large");

hulkSmash.addEventListener("click", function() {
  newGuinea.classList.toggle("hulkify");
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it
var capture = document.getElementById("add-border");

capture.addEventListener("click", function() {
  newGuinea.classList.toggle("add-border");
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

var makeRound = document.getElementById("add-rounding");

makeRound.addEventListener("click", function() {
  newGuinea.classList.toggle("add-rounding");
});


// The first section's text should be bold.


// The last section's text should be bold and italicized.

// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.

// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

var artSec = document.getElementsByTagName("section");
artSec.addEventListener("click", clickMe2);

function clickMe2() {
  document.getElementsByTagName("section").innerHTML += `${"You clicked on the " + section.innerHTML + "section!"}`;
}








