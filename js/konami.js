"use strict";

let cheatCode = [];
let konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
$(document).keyup(function (event) {
    // console.log(event.keyCode);
    let keyPress;

    if (typeof event !== 'undefined') {
        keyPress = event.keyCode;
        cheatCode.push(keyPress);
        console.log(cheatCode);
    }




    if (cheatCode.length === konamiCode.length && cheatCode.every((element, index) => element === konamiCode[index])) {
        alert("Congrats, You now have 30 lives");
        cheatCode.length = 0;
    } else {

        for (let i = 0; i < cheatCode.length; i++) {
            if (cheatCode[i] !== konamiCode[i]) {
                alert("Invalid code, Please try again");
                cheatCode.length = 0;
            }
        }
    }
});




