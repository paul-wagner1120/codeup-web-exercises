

    // Write a function that when passed an object will return the value of the object’s price property.
    //     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89"};
    // getPrice(obj); // returns “$7.89”

function getPrice(obj) {
    return obj.price;
}
let potatoes = {
    name: "Potatoes",
    quantity: 2,
    price: "$7.89"
};
console.log(getPrice(potatoes));


    // Write a function that when passed an array will return the longest string from the array.
    //     Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
    // getLongestString(arr) // Returns “Periwinkle”

        // --- potential similar test question ---
function getLongestString(arr) {
    let longest = "";
    let longestStr;
    for (let str of arr) {
        if (str.length > longest.length) {
             longestStr = str;
        }
    }
    return longestStr;
}
const colors = ["green", "blue", "periwinkle"]

    console.log(getLongestString(colors));

// ----------------------------------------------------//

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

function getTallestHamster(arr){
    let tallest = {heightInMM: 0};
    arr.forEach(function (el){ // for each loop
        if(el.heightInMM > tallest.heightInMM) {
            tallest = el;
        }
    });
    // for(let i = 0; i < arr.length; i++) { // for loop
    //     if(arr[i].heightInMM > tallest.heightInMM) {
    //         tallest = arr[i];
    //     }
    // for (let el of arr) { // for of loop
    //     if(el.heightInMM > tallest.heightInMM) {
    //         tallest = el;
    //     }


    return tallest;
}
console.log(getTallestHamster(hamsters));

// should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'], gender: "male", dateOfBirth: "September 21"};


    // Warmup: Write FizzBuzz from 1-100;
    // Numbers evenly divisible by 3 should be replaced by Fizz
    // Numbers evenly divisible by 5 should be replaced by Buzz
    // Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
    // All other numbers should be printed in the console.


function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz");
        } else if ( i % 3 === 0){
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();
