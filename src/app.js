import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let cardNumber = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
let cardSuite = ["♥","♦","♣","♠"]


let randomNumber = Math.floor(Math.random() * cardNumber.length);
let randomSuite = Math.floor(Math.random() * cardSuite.length);

const topSuite = document.querySelector(".topSuite")
const midNum = document.querySelector(".midNum")
const botSuite = document.querySelector(".botSuite")

if (cardSuite[randomSuite] == "♥" || cardSuite[randomSuite] == "♦" ) { 
      topSuite.style.color = "red"
      botSuite.style.color ="red"
      midNum.style.color = "red"
}

topSuite.innerHTML = cardSuite[randomSuite];
midNum.innerHTML = cardNumber[randomNumber];
botSuite.innerHTML = cardSuite[randomSuite];

// document.getElementById('.card').classList.add(getSuiteClass(finalSuit));

  console.log("Hello Rigo from the console!");
};

