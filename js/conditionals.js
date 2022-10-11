"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color) {
//     if (color === "blue") {
//         console.log("Blue is the color of the sky!");
//     } else if (color === "red") {
//         console.log("Strawberries are red!");
//     } else {
//         console.log("Sorry, I don't know anything about " + color + "!");
//     }
//
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(color) {
    switch(color) {
        case "blue":
            console.log("Blue is the color of the sky!");
            return "Blue is the color of the sky!";

        case "red":
            console.log("Strawberries are red!");
            return "Strawberries are red!!!";
        default:
            console.log(color + " is a weird color!");
            return "Wow, you like " + color + "? That's a weird color.";
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let userColor = prompt("What is your favorite color?");

alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
alert("Welcome to Walmart! We have some huge discounts for you today! Every customer will be assigned a random number that corresponds to the following discounts! Good luck and thank you for shopping at Walmart!!!");
function welcomeToWalmart(discounts) {
        let newLine = "\r\n"
        discounts = "Discounts are as follows!!!";
        discounts += newLine;
        discounts += "0 = No Discount";
        discounts += newLine;
        discounts += "1 = 10%";
        discounts += newLine;
        discounts += "2 = 25%";
        discounts += newLine;
        discounts += "3 = 35%";
        discounts += newLine;
        discounts += "4 = 50%";
        discounts += newLine;
        discounts += "5 = WINNER WINNER CHICKEN DINNER!!! Congratulations, your discount is 100%!!!";
       return(discounts)
}
alert(welcomeToWalmart());



function calculateTotal(cartPrice, luckyNumber) {
    let discountPrice;
    switch(luckyNumber) {
        case 0:
            return cartPrice;
        case 1:
            return discountPrice = cartPrice - (cartPrice * .1);
        case 2:
            return discountPrice = cartPrice - (cartPrice * .25);
        case 3:
            return discountPrice = cartPrice - (cartPrice * .35);
        case 4:
            return discountPrice = cartPrice - (cartPrice * .5);
        case 5:
            return discountPrice = 0;
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

let cart = parseFloat(prompt("How much is your total in dollars?"));
let luckyNumber = Math.floor(Math.random() * 6);

let calcTotal = calculateTotal(cart, luckyNumber);
console.log(calcTotal);
alert("Your Lucky number is " + luckyNumber + ". Your total before discount is $" + cart + ". Your total after discount is $" + calcTotal + ".");

    // I was on the right path but just taking the much longer route. Cody stepped in and helped me condense it! Thanks a ton!

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

if (confirm("Would you like to enter a number?")) {
    let userNumber = parseFloat(prompt("Please enter a number"));

    function isEvenOrOdd(userNumber) {
        if (userNumber % 2 === 0) {
            return(userNumber + " is even!");
        } else {
            return(userNumber + " is odd!");
        }
    }
    function isPosOrNeg(userNumber) {
        if(userNumber >= 0) {
            return(userNumber + " is positive!");
        } else {
            return (userNumber + " is negative!");
        }
    }
    alert(isEvenOrOdd(userNumber));
    alert(userNumber + " + 100 = " + (userNumber + 100));
    alert(isPosOrNeg(userNumber));

}









