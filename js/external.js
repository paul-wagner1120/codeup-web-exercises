"use strict";

console.log('Hello from external JavaScript')

alert("Welcome to my Website");

let userInput = prompt('What is your favorite color?');
console.log('Great, ' + userInput, 'is my favorite color too!');
alert("Great, " + userInput + " is my favorite color too!")

// 3.1

let scenario1 = confirm('Scenario #1');

    let littleMer = prompt('How many days did you have Little Mermaid?');
    let brotherB = prompt('How many days did you have Brother Bear?');
    let hercules = prompt('How many days did you have Hercules?');
    let pricePerDay = 3
    alert("Rental Price is $3/day.")
    let total = (Number(littleMer) + Number(brotherB) + Number(hercules))* pricePerDay;

    alert('Your total is $' + total + ".");

// 3.2

let scenario2 = confirm('Scenario #2');

    let googlePay = 400;
    let amazonPay = 380;
    let fbPay = 350;
    let googleHours = prompt('How many hours did you work for Google @ $400/hr?');
    let amazonHours = prompt('How many hours did you work for Amazon @ $380/hr?');
    let fbHours = prompt('How many hours did you work for Facebook @ $350/hr?');

    let paycheck = ('Your gross pay is $' + (Number(googleHours * googlePay) + (amazonHours * amazonPay) + (fbHours * fbPay)) + ".");

alert (paycheck);

// 3.3

let scenario3 = confirm('Scenario #3');

let classFull = confirm(`Is there room in the class? OK for Yes, Cancel for No`);
let scheduleConflict = confirm('Are you available to take a class in the morning?');
alert(`You can join the class: ${classFull && scheduleConflict}`);

// 3.4

let scenario4 = confirm('Scenario #4');

let premium = confirm(`Are you a premium member?`);
let itemsPurchased = confirm(`Are you buying more than 2 items?`);
let offerValid = confirm('Is the offer still valid?')
alert(`You qualify for the product offer: ${itemsPurchased && offerValid || premium && offerValid}`);




