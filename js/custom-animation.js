// var $animation_elements = $('.animation-element');
// var $window = $(window);

// function check_if_in_view() {
//   console.log('view')
//   var window_height = $window.height();
//   var window_top_position = $window.scrollTop();
//   var window_bottom_position = (window_top_position + window_height);
 
//   $.each($animation_elements, function() {
//     var $element = $(this);
//     var element_height = $element.outerHeight();
//     var element_top_position = $element.offset().top;
//     var element_bottom_position = (element_top_position + element_height);
 
//     //check to see if this current container is within viewport
//     if ((element_bottom_position >= window_top_position) &&
//         (element_top_position <= window_bottom_position)) {
//       $element.addClass('in-view');
//     } else {
//       $element.removeClass('in-view');
//     }
//   });
// }

// $window.on('scroll resize', check_if_in_view);
// $window.trigger('scroll');






$(window).scroll(function() {
  var $animation_elements = $('.animation-element');


  $.each($animation_elements, function() {
    var $element = $(this);
    var top_of_element = $element.offset().top;
    var bottom_of_element = $element.offset().top + $element.outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // the element is visible, do something
        $element.addClass('in-view');
    } else {
        // the element is not visible, do something else
        $element.removeClass('in-view');
    }
  })
});