

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