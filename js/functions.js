"use strict";
(function (){

/**
 * TODOne:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
function sayHello(name) {
    return "Hello, " + name + "!";
}

/**
 * TODOne:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
let helloMessage = sayHello('Paul');
console.log(helloMessage);


/**
 * TODOne:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
let myName = "Paul Wagner"
sayHello(myName)
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
let random = Math.floor((Math.random() * 3) + 1);

/**
 * TODOne:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as an argument.
 *
 * console.log *outside the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(num){
    return num === 2;
}
console.log(isTwo(random));

/**
 * TODOne:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

function calcTip(tipPercentage, totalBill) {
    return ("Your amount to tip is $" + (tipPercentage / 100) * totalBill);
}
console.log(calcTip(20, 20));
console.log(calcTip(25, 25.50));
console.log(calcTip(15, 33.42));

/**
 * TODOne:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

let userTotal = prompt("How much was your total?");
let userTip = prompt("What percentage would you like to tip?");
alert(calcTip(userTip, userTotal));


/**
 * TODOne:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

function applyDiscount(priceBefore, discountPercent){
    return "Your discounted total is $" + (priceBefore - (priceBefore * discountPercent))
}
console.log(applyDiscount(100, .2));
console.log(applyDiscount(45.99, .12));

})()


