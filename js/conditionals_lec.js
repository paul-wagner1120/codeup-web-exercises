
// "use strict";
// // Consider the sentence: When I run out of milk, I must go to the store to buy more.
// //condition: running out of milk
// //action: go to the store
//
// // let outOfMilk = true
// //
// // if (outOfMilk === true) {
// //     alert("Paul!!! Go get milk!!!");
// // }
//
// // create a block of code that logs a message to the console when a variable is set to the number 5
// let possiblyFive = 5;
//
// if (possiblyFive === 5) {
//     console.log("The number is five!");
//
// }
//
// // build a function that returns a string when a number is passed as an argument
// // line 23 is partial to the assessment
// function isItANumber(parameter) {
//     if (!isNaN(parameter)){
//         return "That is in fact a number";
//         // if (typeof parameter === "number") { // !isNaN(parseFloat(parameter)) && typeof parameter !== "string" is an alt condition that would work
//     }
// }
//
// console.log(isItANumber(7));
// console.log(isItANumber(99));
// console.log(isItANumber(true));
// console.log(isItANumber(banana));
//
//
// // IF/ELSE Statements: code that runs when a condition is met, but will also run with a default state.
//
// // if (condition) {
// //     i run when the condition evaluates to true;
// // } else {
// //     otherwise I run;
// // }
//
// /** consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since
//  * I don't, I'll go to the store instead." */
//
// let hasCows = false
//
// if (hasCows) {
//     console.log("Going out to get milk");
// } else {
//     console.log("Alright, I'm headed out to H-E-B.");
// }
//
// /** lets expand our previous isItANumber function. now i want to return a string when we aren't passed a number.
//  * How do i refactor our function?
//  */
//
// // function isItANumber(parameter) {
// //     if (!isNaN(parameter)){
// //         return "That is in fact a number";
// //
// //         // if (typeof parameter === "number") { // !isNaN(parseFloat(parameter)) && typeof parameter !== "string" is an alt condition that would work
// //     } else {
// //         return "Sorry, that is not a number";
// //     }
// // }
//
// // if/else if/else = a chain of if/else statements to give different results for different conditions.
//
// // if (condition) {
// //      run this code;
// // } else if (condition2) {
// //      since the first condition wasnt met, and the second was, I run;
// // } else {
// //      since neither conditions from above were met, i run by default.
// // }
//
// /** consider the following: if i order from taco bell a baja blast and a crunchwrap supreme, and
//  * i get neither, I am going to riot in the parking lot.
//  */
//
// let hasCrunchwrap = true
// let hasDrink = true
//
// if (hasCrunchwrap && hasDrink) {
//     console.log("My order is complete");
// } else if (hasCrunchwrap) {
//     console.log("This is acceptable");
// } else {
//     console.log("Prepare to be rioted!!!");
// }
//
// /** make a function that takes in a number and will return three different strings for an argument lesser tha, greater than, or equal to 35. */
//
// function isThisThirtyFive(parameter) {
//     if (parameter > 35) {
//         return "Oy, " + parameter + "is greater than 35.";
//     } else if (parameter < 35) {
//         return "Oy, " + parameter + "is less than 35.";
//     } else if (parameter === 35) {
//         return "That is definitely 35!";
//     } else {
//         return "Oy" + parameter + " isn't even a number!"
//     }
// }
//
// console.log(isThisThirtyFive(34));
// console.log(isThisThirtyFive(35));
// console.log(isThisThirtyFive(36));
// console.log(isThisThirtyFive("soup"));
//
//
// // TERNARY EXPRESSION: A statement to set a value based on boolean evaluation.
//
// // let message = (booleanValue) ? "Operation was true." : "Operation was false.";
//
// /** consider the following statement: "are we out of milk? if we are: i'll head to the store, but if we do have milk, I want to make a bowl of cereal." */
//
// let doWeHaveMilk = true;
//
// let action = (doWeHaveMilk === true) ? "Making a bowl of cereal" : "Heading to the store";
//
// console.log(action);
//
// /** to-do: lets look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary operator. */
//
//
// function isItANumber(parameter) {
//     return (typeof parameter === "number") ? "That is a number" : "Sorry thats not a number";
// }
//
//
// // function isItANumber(parameter) {
// //     if (!isNaN(parameter)){
// //         return "That is in fact a number";
// //
// //         // if (typeof parameter === "number") { // !isNaN(parseFloat(parameter)) && typeof parameter !== "string" is an alt condition that would work
// //     } else {
// //         return "Sorry, that is not a number";
//
// // SWITCH STATEMENTS: a statement with multiple conditions that will trigger based on the value of a variable.
//
// let color = prompt("What is your favorite color?");
//
// switch(color) {
//     case "green":
//         alert("what a coincidence, thats my favorite");
//         break;
//     case "orange":
//         alert("thats my brothers favorite");
//         break;
//     default:
//         alert(color + " is a weird color, my dude");
//         break;
//
// }
//
// /** consider the following: I dont have a cow, goat, or camel. I guess i have to go to the store for milk." */
//
// let animal = "dog";
//
// switch(animal) {
//     case "cow":
//         alert("I'm milking Bessie");
//         break;
//     case "goat":
//         alert("Go get the goat");
//         break;
//     case "camel":
//         alert("you can milk a camel");
//         break;
//     default:
//         alert("heading to the store");
//
// }
//
// /** to-do: lets make a statement with a prompt for a the user to input their favorite lunch meat. if they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. all other responses should trigger an alert stating apathy. */
//
// let lunchMeat = prompt("whats your favorite lunch meat");
//
// switch(lunchMeat) {
//     case "olive loaf":
//         alert("ah, a bold choice");
//         break;
//     case "brisket":
//         alert("congrats on the correct choice");
//         break;
//     default:
//         alert("i feel sorry for you");
//
// }
//
