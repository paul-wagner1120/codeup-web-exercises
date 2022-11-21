"use strict";

let cheatCode = [];
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]
let myAudio = document.querySelector('#audio')
$(document).keydown(function (event) {
    // console.log(event.keyCode);
    let keyPress;

    if (typeof event !== 'undefined') {
        keyPress = event.keyCode;
        cheatCode.push(keyPress);
        console.log(cheatCode);
    }
    switch(keyPress) {
        case 38:
            changeImg('img/d-pad-up.svg');
            break;
        case 40:
            changeImg('img/d-pad-down.svg');
            break;
        case 37:
            changeImg('img/d-pad-left.svg');
            break;
        case 39:
            changeImg('img/d-pad-right.svg');
            break;
        case 66:
            // $('.bButton').css("background", "lightgrey");
            $('.bButton').css("opacity", "50%");
            break;
        case 65:
            $('.aButton').css("opacity", "50%");
            break;
        case 13:
            $('.startImg').css("opacity", "50%");
    }

function showImg(){
        let img = document.createElement('img');
        img.src = "img/dark-magician.png";
        let src = document.getElementById("victory");
        src.appendChild(img);
}

    if (cheatCode.length === konamiCode.length && cheatCode.every((element, index) => element === konamiCode[index])) {
        $('#victory').modal('show');
        myAudio.play()
        cheatCode.length = 0;
    } else {

        for (let i = 0; i < cheatCode.length; i++) {
            if (cheatCode[i] !== konamiCode[i]) {
                // alert("Invalid code, Please try again");
                cheatCode.length = 0;
            }
        }
    }
});

function changeImg(fileName){
    let img = document.querySelector("#dpad");
    img.setAttribute("src", fileName);
}

$(document).keyup(function (){
    changeImg('img/d-pad-none.svg')
    $('.bButton').css("opacity", "100%");
    $('.aButton').css("opacity", "100%");
    $('.startImg').css("opacity", "100%");
})




