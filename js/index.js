// Fixed the nav menu not closing on selection
$('.nav-item').on('click', function() {
  $('.navbar-collapse').removeClass('show');
});

// Scrolling animation for navbar
$(function() {
  $('ul.navbar-nav a').bind('click', function(event) {
    event.preventDefault();
    var $anchor = $(this);
    console.log($anchor.attr('href'));
    var scrollAnimation = $($anchor.attr('href')).offset();
    $('html, body').stop().animate(
      {
        scrollTop: scrollAnimation.top,
      },
      1000,
    );
    event.preventDefault();
  });
});
