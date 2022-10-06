"use strict";

console.log('Hello from external JavaScript')

alert("Welcome to my Website");

let userInput = prompt('What is your favorite color?');
console.log(userInput + ' is my favorite color too!');
alert(userInput + ' is my favorite color too!')

let confirmed = confirm('Scenario #1');
console.log(confirmed); // will be either true or false

    let littleMer = prompt('How many days did you have Little Mermaid');
    let brotherB = prompt('How many days did you have Brother Bear');
    let hercules = prompt('How many days did you have Hercules');
    let pricePerDay = 3
    let total = (Number(littleMer) + Number(brotherB) + Number(hercules))* pricePerDay;

    alert('Your total is ' + total);

let confirmed2 = confirm('Scenario #2');
console.log(confirmed2); // will be either true or false

    let googlePay = 400;
    let amazonPay = 380;
    let fbPay = 350;
    let googleHours = prompt('How many hours did you work for Google?');
    let amazonHours = prompt('How many hours did you work for Amazon?');
    let fbHours = prompt('How many hours did you work for Facebook?');

    let paycheck = ('Gross pay is ' + (Number(googleHours * googlePay) + (amazonHours * amazonPay) + (fbHours * fbPay)));

alert (paycheck);

let confirmed3 = confirm('Scenario #3');
console.log(confirmed3); // will be either true or false

let classFull = confirm(`Is there room in the class and in your schedule?`);
alert(`you can join the class: ${classFull}`);

let confirmed4 = confirm('Scenario #4');
console.log(confirmed4); // will be either true or false

let premium = confirm(`Are you a premium member?`);
alert(`You qualify for the product offer: ${premium}`);

let itemsPurchased = confirm(`Are you buying more than 2 items and is the offer still valid?`);
alert(`You qualify for the product offer: ${itemsPurchased}`);




