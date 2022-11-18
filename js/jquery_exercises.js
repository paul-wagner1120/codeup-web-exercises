"use strict"
$(function() {
// $('.codeup').css('border', '1px solid red');
// $('li').css('font-size', '20px');
// $('h1, p, li').css('background', 'lightblue');
//
// let alertH1 = $('h1').html();
//     alert(alertH1);

    $('h1').click(function() {
        $(this).css('background', 'limegreen');
    });



    $('p').dblclick(function(){
        $(this).css('font-size', '18px');
    });

    $('li').hover(function() {
        $(this).css('color', 'red');
    }, function() {
        $(this).css('color', 'black');
    });

});

