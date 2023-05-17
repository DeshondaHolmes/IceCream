"use strict";

// declair all of our form controls as variables, any html elements that we may need to interact with.

const numberOfScoops = document.getElementById("numberOfScoops");//number of  scoops

const coneChoice = document.getElementById("coneChoice"); //Cone Radio choice

const cupChoice = document.getElementById("cupChoice"); //Cup Radio choice
const toppingsRow = document.getElementById("toppingRow")
//Toppings Checkboxes
const toppingSprinkles = document.getElementById("toppingSprinkles");
const toppingHotfudge  = document.getElementById("toppingHotfudge");
const toppingWhipped   = document.getElementById("toppingWhipped");
const toppingCherry    = document.getElementById("toppingCherry");


// Spans that will hold the output.
const basePrice = document.getElementById("base-price"); 
const toppingsAmount = document.getElementById("toppings-amount");
const totalAmount = document.getElementById("total-amount");

const button = document.getElementById("button");


window.onload = function(){
    console.log("Window loaded")
    // wire up the button
    button.onclick = onButtonClick;
    console.log("Hello");

    // wire up the radio boxes

    cupChoice.onchange = toggleToppingDisplay;
    coneChoice.onchange = toggleToppingDisplay;
}


//this will be for when the button is clicked.
function onButtonClick(){
 console.log ("onbuttonclick")
    // calculate the base price 
    let scoops = Number(numberOfScoops.value);

    let basePriceAmount = (2.25 + ((scoops - 1) * 1.25));
    basePrice.innerHTML = basePriceAmount;
 

    let toppingsAmountTotal = 0;

    
    //calculate the toppings price
    if (toppingSprinkles.checked){
        toppingsAmountTotal += 0.50;
    } 

    if (toppingHotfudge.checked){
        toppingsAmountTotal += 1.25;
    } 

    if (toppingWhipped.checked){
        toppingsAmountTotal += 0.25;
    } 

    if (toppingCherry.checked){
        toppingsAmountTotal += 0.25;
    } 

    // at this point we have the total toppings value!

    toppingsAmount.innerHTML = toppingsAmountTotal;
    // calculate the total

    let total = toppingsAmountTotal + basePriceAmount;

    totalAmount.innerHTML = total;
}


function toggleToppingDisplay(){
    //figure out if the toppings should or should not be displayed.
    console.log ("toggletoppingdisplay");
    let cupChoice = document.getElementById("cupChoice");
    let toppingsRow = document.getElementById("toppingRow")
    //figure out if the toppings should or should not be displayed.
    if (cupChoice.onchange){
    toppingsRow = "none";
    }
    else{
    toppingsRow = "block";
    }
    //identify if Cup is selected, and show the toppings if it is.

    //identify if Cone is selected, and hide the toppings if it is.

}
toggleToppingDisplay()
toggleToppingDisplay()
