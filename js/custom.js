$(document).ready(function() {
    var slideCount = $('.slider .slider-content .single-item').length;
	var slideWidth = $('.slider .slider-content .single-item').width();
    var slideHeight = $('.slider .slider-content .single-item').height();
    
    var sliderUlWidth = slideCount * slideWidth;
    
    if(window.matchMedia("(max-width: 767px)").matches) {
        $('.slider').css({ width: (slideWidth * 1) + 0, height: slideHeight });
        $('.slider .slider-content').css({ width: (slideWidth * 1) + 0 });
    } else if(window.matchMedia("(max-width: 1023px)").matches) {
        $('.slider').css({ width: (slideWidth * 2) + 20, height: slideHeight });
        $('.slider .slider-content').css({ width: (slideWidth * 2) + 20 });
    } else if(window.matchMedia("(max-width: 1280px)").matches) {
        $('.slider').css({ width: (slideWidth * 3) + 57, height: slideHeight });
        $('.slider .slider-content').css({ width: (slideWidth * 3) + 57 });
    } else {
        $('.slider').css({ width: (slideWidth * 3) + 66, height: slideHeight });
        $('.slider .slider-content').css({ width: (slideWidth * 3) + 66 });
    }
	
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






// $(document).ready(function(){
//     if(window.matchMedia("(max-width: 767px)").matches){
//         // The viewport is less than 768 pixels wide
//         alert("This is a mobile device.");
//     } else{
//         // The viewport is at least 768 pixels wide
//         alert("This is a tablet or desktop.");
//     }
// });