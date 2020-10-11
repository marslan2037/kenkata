$(document).ready(function() {
    // setInterval(function () {
    //     moveRight();
    // }, 3000);


    var slideCount = $('.slider .slider-content .single-item').length;
    console.log(slideCount)
	var slideWidth = $('.slider .slider-content .single-item').width();
    var slideHeight = $('.slider .slider-content .single-item').height();
    
    var sliderUlWidth = slideCount * slideWidth;
    
    $('.slider').css({ width: (slideWidth * 3) + 66, height: slideHeight });
	
	$('.slider .slider-content').css({ width: (slideWidth * 3) + 66 });
	
    $('.slider .slider-content .single-item:last-child').prependTo('.slider .slider-content');

    function moveLeft(current_element) {
        current_element.find('.slider .slider-content').animate({
            left: + slideWidth
        }, 200, function () {
            current_element.find('.slider .slider-content .single-item:last-child').prependTo('.slider .slider-content');
            current_element.find('.slider .slider-content').css('left', '');
        });
    };

    function moveRight(current_element) {
        current_element.find('.slider .slider-content').animate({
            left: - slideWidth
        }, 200, function () {
            current_element.find('.slider .slider-content .single-item:first-child').appendTo('.slider .slider-content');
            current_element.find('.slider .slider-content').css('left', '');
        });
    };

    $('span.control_prev').click(function () {
        var current_element = $(this).parent();
        moveLeft(current_element);
    });

    $('span.control_next').click(function () {
        var current_element = $(this).parent();
        moveRight(current_element);
    });
})







$(document).ready(function() {
    $(".mobile-menu-button").on("click", function() {
        $("ul.main-menu").slideToggle();
    })
})