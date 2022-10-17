"use strict";
/** TODO
 * Exercise 2
 */
let num = prompt("Please enter a number");

function showMultiplicationTable() {
        for (let i = 1; i <= 10; i++) {
            let result = i * num;
            // console.log(`${num} * ${i} = ${result}`); // same as line 9 below
            console.log(num + "*" + i + "=" + result);
        }
}
showMultiplicationTable(num);
/** TODO
 * Exercise 3
 */
function evenOrOdd () {
    for (let i = 0; i < 10; i++) {
         let randomNum = Math.floor(Math.random()*200) + 20;
             if (randomNum % 2 === 0) {
                 console.log(randomNum + ", is Even");
             } else {
                 console.log(randomNum + ", is Odd");
             }
        }
}
evenOrOdd();
/** TODO
 * Exercise 4
 */
function pyramidOfNumbers() {
    let output = '';
    for (let i = 1; i < 10; i++) {
        for (let j = 1; j <= i; j++) {
            output += i;
        }
        output += "\n";
    }
    console.log(output);
}
pyramidOfNumbers();
// this is code I found on the internet that provides a number pyramid, just not like that of the exercise

// let numberOfRows = 9;
// let output = '';
// for (let i = 1; i <= numberOfRows; i++) {
//     for (let j = 1; j <= i; j++) {
//         output += j + '  ';
//     }
//     console.log(output);
//     output = '';
// }

// below is code that a classmate found on the internet that returns the correct solution to the exercise.

// let char = "";
//
// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j <= i; j++) {
//         char += i;
//     }
//     char += "\n";
// }
// console.log(char);
/** TODO
 * Exercise 5
 */

function countdownBy5() {
    for (let i = 100; i > 0; i -= 5) {
        console.log(i);
    }
}
countdownBy5();



