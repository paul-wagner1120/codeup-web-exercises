"use strict";

$(document).ready(function() {
    $('#toggle-invisible').click(function(event) {
        event.preventDefault();
        $('.answer').toggleClass('invisible');
    });

    $('.question').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('highlighted');
    });

    $("#btn-1").click(function (){
        $('ul').each(function(){
            $(this).children().last().toggleClass('highlighted');
        });
    });

    $('h3').click(function (){
        $(this).next().children().css('font-weight', 'bold');
    });

    $('li').click(function (){
        $(this).parent().children().first().css('color', 'blue');
    });


});



