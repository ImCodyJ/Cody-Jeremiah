/*
  Student Name: Cody J. and Jeremiah D.
  File Name: script.js
  Date: 11/6/2023
*/

//Global variables
var answer = document.querySelector("#answer p");
var heading = document.querySelector("#answer h2");

// Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#2a1f14";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#f6eee4";
    }
}
//Function to display the first answer
function ans1() {
    heading.style.display = "block";
    	    answer.textContent = "DDU-DU DDU-DU";
}

//Function to display the second answer
function ans2() {
    heading.style.display = "block";
    answer.textContent = "Beyoncé";
}

//Function to display the third answer
function ans3() {
    heading.style.display = "block";
    answer.textContent = "The Who";
}

//Function to display the fourth answer
function ans4() {
    heading.style.display = "block";
    answer.textContent = "Eminem";
}

