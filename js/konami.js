"use strict";

let cheatCode = [];
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
$(document).keyup(function(event){
    // console.log(event.keyCode);
    let keyPress;

    if (typeof event !== 'undefined'){
        keyPress = event.keyCode;
        cheatCode.push(keyPress);
        console.log(cheatCode);
    }

    if (cheatCode.length > 11){
        alert("Cheat Code Invalid, please try again!")
        cheatCode = [];
    } else if(cheatCode === konamiCode){
        alert("Congrats! You now have blue 30 lives")
    }



});




