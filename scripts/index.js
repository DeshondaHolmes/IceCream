"use strict";

// declair all of our form controls as variables, any html elements that we may need to interact with.

const numberOfScoops = document.getElementById("numberOfScoops");//number of  scoops

const coneChoice = document.getElementById("coneChoice"); //Cone Radio choice

const cupChoice = document.getElementById("cupChoice"); //Cup Radio choice


const toppingsRow = document.getElementById("toppingsRow"); //Cup Radio choice


//Toppings Checkboxes
const toppingSprinkles = document.getElementById("toppingSprinkles");
const toppingHotfudge = document.getElementById("toppingHotfudge");
const toppingWhipped = document.getElementById("toppingWhipped");
const toppingCherry = document.getElementById("toppingCherry");


// Spans that will hold the output.
const basePrice = document.getElementById("base-price");
const toppingsAmount = document.getElementById("toppings-amount");
const totalAmount = document.getElementById("total-amount");

const button = document.getElementById("button");




window.onload = function () {
    console.log("Window loaded")
    // wire up the button
    button.onclick = onButtonClick;

    // wire up the radio boxes

    cupChoice.onchange = toggleToppingsDisplay;
    coneChoice.onchange = toggleToppingsDisplay;
}


//this will be for when the button is clicked.
function onButtonClick() {
    console.log("onbuttonclick")
    // calculate the base price 
    let scoops = Number(numberOfScoops.value);

    let basePriceAmount = (2.25 + ((scoops - 1) * 1.25));
    basePrice.innerHTML = basePriceAmount;


    let toppingsAmountTotal = 0;


    //calculate the toppings price
    if (toppingSprinkles.checked) {
        toppingsAmountTotal += 0.50;
    }

    if (toppingHotfudge.checked) {
        toppingsAmountTotal += 1.25;
    }

    if (toppingWhipped.checked) {
        toppingsAmountTotal += 0.25;
    }

    if (toppingCherry.checked) {
        toppingsAmountTotal += 0.25;
    }

    // at this point we have the total toppings value!

    toppingsAmount.innerHTML = toppingsAmountTotal.toFixed(2);




    // calculate the total

    let total = toppingsAmountTotal + basePriceAmount;

    totalAmount.innerHTML = total.toFixed(2);


}




function toggleToppingsDisplay() {
    //figure out if the toppings should or should not be displayed.
    console.log("toggletoppingdisplay");

    //figure out if the toppings should or should not be displayed.
    if (cupChoice.checked) {

        toppingsRow.style.display = "block";
        totalAmount.innerHTML ="";
        toppingsAmount.innerHTML = "";
        basePrice.innerHTML = "";
        numberOfScoops.value = "";

    } else if (coneChoice.checked) {
        toppingsRow.style.display = "none";
        toppingsAmount.innerHTML = "";
        totalAmount.innerHTML ="";
        basePrice.innerHTML = "";
        numberOfScoops.value = "";

    }

}