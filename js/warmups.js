//
//
//     // Write a function that when passed an object will return the value of the object’s price property.
//     //     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
//     // getPrice(obj); // returns “$7.89”
//
// function getPrice(obj) {
//     return obj.price;
// }
// let potatoes = {
//     name: "Potatoes",
//     quantity: 2,
//     price: "$7.89"
// };
// console.log(getPrice(potatoes));
//
//
//     // Write a function that when passed an array will return the longest string from the array.
//     //     Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
//     // getLongestString(arr) // Returns “Periwinkle”
//
//         // --- potential similar test question ---
// function getLongestString(arr) {
//     let longest = "";
//     let longestStr;
//     for (let str of arr) {
//         if (str.length > longest.length) {
//              longestStr = str;
//         }
//     }
//     return longestStr;
// }
// const colors = ["green", "blue", "periwinkle"]
//
//     console.log(getLongestString(colors));
//
// // ----------------------------------------------------//
//
const hamsters = [
        {
            name: "Hamtaro",
            heightInMM: 86,
            fur: ['orange', 'white'],
            gender: "male",
            dateOfBirth: "August 6"
        } , {
            name: "Bijou",
            heightInMM: 75,
            fur: ['white'],
            gender: "female",
            dateOfBirth: "July 10"
        } , {
            name: "Oxnard",
            heightInMM: 100,
            fur: ['grey', 'white'],
            gender: "male",
            dateOfBirth: "May 3"
        } , {
            name: "Boss",
            heightInMM: 120,
            fur: ['brown', 'white'],
            gender: "male",
            dateOfBirth: "September 21"
        } , {
            name: "Snoozer",
            heightInMM: 85,
            fur: ['brown', 'white', "pink"],
            gender: "male",
            dateOfBirth: "January 14"
        }
    ];

// function getTallestHamster(arr){
//     let tallest = {heightInMM: 0};
//     arr.forEach(function (el){ // for each loop
//         if(el.heightInMM > tallest.heightInMM) {
//             tallest = el;
//         }
//     });
//     // for(let i = 0; i < arr.length; i++) { // for loop
//     //     if(arr[i].heightInMM > tallest.heightInMM) {
//     //         tallest = arr[i];
//     //     }
//     // for (let el of arr) { // for of loop
//     //     if(el.heightInMM > tallest.heightInMM) {
//     //         tallest = el;
//     //     }
//
//
//     return tallest;
// }
// console.log(getTallestHamster(hamsters));


function getTallestHamster(arr){
    let tallest = {heightInMM:0};

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].heightInMM > tallest.heightInMM) {
            tallest = arr[i];
        }
    }
    return tallest;
}

console.log(getTallestHamster(hamsters));
//
// // should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};
//
//
//     // Warmup: Write FizzBuzz from 1-100;
//     // Numbers evenly divisible by 3 should be replaced by Fizz
//     // Numbers evenly divisible by 5 should be replaced by Buzz
//     // Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
//     // All other numbers should be printed in the console.
//
//
// function fizzBuzz() {
//     for(let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizz Buzz");
//         } else if ( i % 3 === 0){
//             console.log("Fizz");
//         } else if (i % 5 === 0){
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
//
// fizzBuzz();
//
//
//     // Write a function that takes in an array of objects and returns the average of the heightInMM properties from each object.
//  function getAvgHeight(arr) {
//      let totalHeight = 0;
//      for (let element of arr) {
//          totalHeight += element.heightInMM;
//      }
//      return(totalHeight/arr.length);
//  }
//
//     console.log(getAvgHeight(hamsters));



// write a function named isPositive that returns T or F based on whether the input is negative

function isPositive(num) {
    if(num > 0) {
        console.log(true)
        return true;
    } else {
        console.log(false)
    }
}

isPositive(3);
isPositive(-1);
isPositive(0);


// write a function named isFortyTwo that accepts a number and returns a boolean that indicates whether that number is equal to 42

function isFortyTwo(num) {
    return num === 42;
}

console.log(isFortyTwo(41));


// write a function named countEvens that accepts an array of numbers and returns the number of even numbers within the array
let numbersArray = [1,2,3,4,5,6]
function countEvens(arr) { // possible count odds question on test????
    let count = 0;
    arr.forEach(function (number) {
        if(number % 2 === 0) {
            count++;
        }
    });
    return count;

    //iterate through the array

    // if arr[0] % 2 === 0

    // count/return the number of even numbers in the array

}

console.log(countEvens(numbersArray));

// arr.forEach(function (el){ // for each loop
// //         if(el.heightInMM > tallest.heightInMM) {
// //             tallest = el;
// //         }
// //     });

// define a function called isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase, otherwise it should return false

function isAllLowerCase(str){
    return str === str.toLowerCase();
}

console.log(isAllLowerCase("Paul"));
console.log(isAllLowerCase("paul"));


// TODO: Write a function that takes in a string and returns an object with the following properties:
// 	1. `string` which is to be set the to the argument passed into the function.
// 	2. `numberOfWords` which is to be set to the number of words within the string.
// 	3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).