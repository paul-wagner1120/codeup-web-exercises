"use strict";

$(document).ready(function() {
    $('#toggle-invisible').click(function(event) {
        event.preventDefault();
        $('.answer').toggleClass('invisible');
    });
});

$(document).ready(function() {
    $('.question').click(function(event) {
        event.preventDefault();
        $(this).toggleClass('highlighted');
    });
});
