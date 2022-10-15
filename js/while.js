"use strict";
// got help from breakout room @Matthew-Gonzalez with this while loop.
// let i = 1;
//
// while (i < 65536) {
//     let x = i * 2;
//     console.log(x);
//     i *= 2;
// }
// not finished
let conesToSell = 10//Math.floor(Math.random()*50) + 50;
//console.log(conesToSell); // test
let conesBought = 2//Math.floor(Math.random()*5) + 1;
//console.log(conesBought); // test
let conesRemaining = (conesToSell - conesBought);
//console.log(conesRemaining); // test
do {
    console.log("We have IceCream Cones to sell!"); conesRemaining -= conesBought;
    }
 while (conesRemaining > 0);{
    if (conesBought <= conesRemaining) {
        console.log("Thanks for shopping, enjoy your ice cream!");
    } else if (conesRemaining === 0) {
        console.log("Yay! All the ice cream cones are gone! Time to go home!");
    } else {
        console.log("I'm sorry, we do not enough cones to fulfill your order.");
    }
}


// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones