var myImage = document.querySelector('img');

myImage.onclick = function() {

	imgSrc = myImage.getAttribute('src');

	if (imgSrc === 'images/kingkiller.jpg') {
		myImage.setAttribute('src', 'images/kingkiller2.jpg');
	}//if 
	else {
		myImage.setAttribute('src', 'images/kingkiller.jpg');
	}//else

}//function

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Read Kingkiller Chronicles, ' + myName; 
}//setUserName()

if(!localStorage.getItem('name')) {
	setUserName();
}//if
else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "Read Kingkiller Chronicles, " + storedName; 
}//else

myButton.onclick = function() {
	setUserName(); 
}//function

/*
This is how you leave a multi-line comment in javascript
*/ 

// a single line comment can be done with two backslashes 