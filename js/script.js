/**
 * Created by kozin on 05.10.2016.
 */

// script for tabs

$(function () {

    var $link = $('#first-link, #second-link, #third-link');
    var $content = $('#first-content, #second-content, #third-content');

    $content.addClass('hide');

    $($link).each(function () {

        if ($(this).attr('id') === "first-link") {

            $(this).addClass('active');

            $("#first-content").addClass("show");

        }
    });

    $link.on('click', function (e) {

        if ($(this).attr('id') === 'first-link') {

            $link.removeClass('active');
            $(this).addClass('active');

            $content.removeClass('show');
            $("#first-content").addClass("show");


        } else if ($(this).attr('id') === 'second-link') {

            $link.removeClass('active');
            $(this).addClass('active');

            $content.removeClass('show');
            $("#second-content").addClass("show");


        } else if ($(this).attr('id') === 'third-link') {

            $link.removeClass('active');
            $(this).addClass('active');

            $content.removeClass('show');
            $("#third-content").addClass("show");
        }
    });
});

// script for form

$(function () {
    var $input = $('#firstname, #lastname, #address');
    var $help = $('.help');
    var $button = $('#button');


    $help.each(function () {
        $(this).fadeOut();
    });

    $input.each(function (i) {
        console.log($(this));


        $(this).hover(function (e) {

            console.log($(this).attr('id'));

            if ($(this).attr('id') === 'firstname') {

                $('#first-prompt').fadeToggle();

            } else if ($(this).attr('id') === 'lastname') {

                $('#second-prompt').fadeToggle();

            } else if ($(this).attr('id') === 'address') {

                $('#third-prompt').fadeToggle();

            }
        });
    });

    $button.on('click', function () {
        $help.each(function () {
            $(this).toggle();
        });
    });
});