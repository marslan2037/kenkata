//SLIDER FOR NEW ARRIVAL SECTION
$(document).ready(function() {
	var slideWidth = $('.new-arrival-slider .slider-content .single-item').width();
    var slideHeight = $('.new-arrival-slider .slider-content .single-item').height();
    
    if(window.matchMedia("(max-width: 767px)").matches) {
        $('.new-arrival-slider').css({ width: (slideWidth * 1) + 0, height: slideHeight });
        $('.new-arrival-slider .slider-content').css({ width: (slideWidth * 1) + 0 });
    } else if(window.matchMedia("(max-width: 1023px)").matches) {
        $('.new-arrival-slider').css({ width: (slideWidth * 2) + 20, height: slideHeight });
        $('.new-arrival-slider .slider-content').css({ width: (slideWidth * 2) + 20 });
    } else if(window.matchMedia("(max-width: 1280px)").matches) {
        $('.new-arrival-slider').css({ width: (slideWidth * 3) + 57, height: slideHeight });
        $('.new-arrival-slider .slider-content').css({ width: (slideWidth * 3) + 57 });
    } else {
        $('.new-arrival-slider').css({ width: (slideWidth * 3) + 66, height: slideHeight });
        $('.new-arrival-slider .slider-content').css({ width: (slideWidth * 3) + 66 });
    }
	
    $('.new-arrival-slider .slider-content .single-item:last-child').prependTo('.new-arrival-slider .slider-content');

    function newArrivalMoveLeft(current_element) {
        current_element.find('.new-arrival-slider .slider-content').animate({
            left: + slideWidth
        }, 200, function () {
            current_element.find('.new-arrival-slider .slider-content .single-item:last-child').prependTo('.new-arrival-slider .slider-content');
            current_element.find('.new-arrival-slider .slider-content').css('left', '');
        });
    };

    function newArrivalMoveRight(current_element) {
        current_element.find('.slider .slider-content').animate({
            left: - slideWidth
        }, 200, function () {
            current_element.find('.new-arrival-slider .slider-content .single-item:first-child').appendTo('.new-arrival-slider .slider-content');
            current_element.find('.new-arrival-slider .slider-content').css('left', '');
        });
    };

    $('.new-arrival-slider-container span.control_prev').click(function () {
        var current_element = $(this).parent();
        newArrivalMoveLeft(current_element);
    });

    $('.new-arrival-slider-container span.control_next').click(function () {
        var current_element = $(this).parent();
        newArrivalMoveRight(current_element);
    });
})

//SLIDER FOR FEATURED PRODUCT SECTION
$(document).ready(function() {
	var slideWidth = $('.featured-product-slider .slider-content .single-item').width();
    var slideHeight = $('.featured-product-slider .slider-content .single-item').height();
    
    if(window.matchMedia("(max-width: 767px)").matches) {
        $('.featured-product-slider').css({ width: (slideWidth * 1) + 0, height: slideHeight });
        $('.featured-product-slider .slider-content').css({ width: (slideWidth * 1) + 0 });
    } else if(window.matchMedia("(max-width: 1023px)").matches) {
        $('.featured-product-slider').css({ width: (slideWidth * 2) + 20, height: slideHeight });
        $('.featured-product-slider .slider-content').css({ width: (slideWidth * 2) + 20 });
    } else if(window.matchMedia("(max-width: 1280px)").matches) {
        $('.featured-product-slider').css({ width: (slideWidth * 3) + 57, height: slideHeight });
        $('.featured-product-slider .slider-content').css({ width: (slideWidth * 3) + 57 });
    } else {
        $('.featured-product-slider').css({ width: (slideWidth * 3) + 66, height: slideHeight });
        $('.featured-product-slider .slider-content').css({ width: (slideWidth * 3) + 66 });
    }
	
    $('.featured-product-slider .slider-content .single-item:last-child').prependTo('.featured-product-slider .slider-content');

    function featuredProductMoveLeft(current_element) {
        current_element.find('.featured-product-slider .slider-content').animate({
            left: + slideWidth
        }, 200, function () {
            current_element.find('.featured-product-slider .slider-content .single-item:last-child').prependTo('.featured-product-slider .slider-content');
            current_element.find('.featured-product-slider .slider-content').css('left', '');
        });
    };

    function featuredProductMoveRight(current_element) {
        current_element.find('.slider .slider-content').animate({
            left: - slideWidth
        }, 200, function () {
            current_element.find('.featured-product-slider .slider-content .single-item:first-child').appendTo('.featured-product-slider .slider-content');
            current_element.find('.featured-product-slider .slider-content').css('left', '');
        });
    };

    $('.featured-product-slider-container span.control_prev').click(function () {
        var current_element = $(this).parent();
        featuredProductMoveLeft(current_element);
    });

    $('.featured-product-slider-container span.control_next').click(function () {
        var current_element = $(this).parent();
        featuredProductMoveRight(current_element);
    });
})

//SLIDER FOR TESTIMONIALS SECTION
$(document).ready(function() {
	var slideWidth = $('.testimonials-slider .slider-content .single-testimonial').width();
    var slideHeight = $('.testimonials-slider .slider-content .single-testimonial').height();
    
    $('.testimonials-slider').css({ width: (slideWidth * 1) + 0, height: slideHeight });
    $('.testimonials-slider .slider-content').css({ width: (slideWidth * 1) + 0 });
	
    $('.testimonials-slider .slider-content .single-testimonial:last-child').prependTo('.testimonials-slider .slider-content');

    function testimonialsMoveLeft(current_element) {
        current_element.find('.testimonials-slider .slider-content').animate({
            left: + slideWidth
        }, 200, function () {
            current_element.find('.testimonials-slider .slider-content .single-testimonial:last-child').prependTo('.testimonials-slider .slider-content');
            current_element.find('.testimonials-slider .slider-content').css('left', '');
        });
    };

    function testimonialsMoveRight(current_element) {
        current_element.find('.testimonials-slider .slider-content').animate({
            left: - slideWidth
        }, 200, function () {
            current_element.find('.testimonials-slider .slider-content .single-testimonial:first-child').appendTo('.testimonials-slider .slider-content');
            current_element.find('.testimonials-slider .slider-content').css('left', '');
        });
    };

    $('.testimonials-slider-container span.control_prev').click(function () {
        var current_element = $(this).parent();
        testimonialsMoveLeft(current_element);
    });

    $('.testimonials-slider-container span.control_next').click(function () {
        var current_element = $(this).parent();
        testimonialsMoveRight(current_element);
    });
})

//SLIDER FOR BLOG SECTION
$(document).ready(function() {
	var slideWidth = $('.blog-slider .slider-content .single-blog').width();
    var slideHeight = $('.blog-slider .slider-content .single-blog').height();
    
    if(window.matchMedia("(max-width: 767px)").matches) {
        $('.blog-slider').css({ width: (slideWidth * 1) + 0, height: slideHeight });
        $('.blog-slider .slider-content').css({ width: (slideWidth * 1) + 0 });
    } else if(window.matchMedia("(max-width: 1023px)").matches) {
        $('.blog-slider').css({ width: (slideWidth * 4) + 24, height: slideHeight });
        $('.blog-slider .slider-content').css({ width: (slideWidth * 4) + 24 });
    } else if(window.matchMedia("(max-width: 1280px)").matches) {
        $('.blog-slider').css({ width: (slideWidth * 3) + 57, height: slideHeight });
        $('.blog-slider .slider-content').css({ width: (slideWidth * 3) + 57 });
    } else {
        $('.blog-slider').css({ width: (slideWidth * 3) + 66, height: slideHeight });
        $('.blog-slider .slider-content').css({ width: (slideWidth * 3) + 66 });
    }
	
    $('.blog-slider .slider-content .single-blog:last-child').prependTo('.blog-slider .slider-content');

    function blogSectionMoveLeft(current_element) {
        current_element.find('.blog-slider .slider-content').animate({
            left: + slideWidth
        }, 200, function () {
            current_element.find('.blog-slider .slider-content .single-blog:last-child').prependTo('.blog-slider .slider-content');
            current_element.find('.blog-slider .slider-content').css('left', '');
        });
    };

    function blogSectionMoveRight(current_element) {
        current_element.find('.slider .slider-content').animate({
            left: - slideWidth
        }, 200, function () {
            current_element.find('.blog-slider .slider-content .single-blog:first-child').appendTo('.blog-slider .slider-content');
            current_element.find('.blog-slider .slider-content').css('left', '');
        });
    };

    $('.blog-slider-container span.control_prev').click(function () {
        var current_element = $(this).parent();
        blogSectionMoveLeft(current_element);
    });

    $('.blog-slider-container span.control_next').click(function () {
        var current_element = $(this).parent();
        blogSectionMoveRight(current_element);
    });
})





$(document).ready(function() {
    $(".mobile-menu-button").on("click", function() {
        $("ul.main-menu").slideToggle();
    })
})