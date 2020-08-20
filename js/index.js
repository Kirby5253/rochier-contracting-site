// Fixed the nav menu not closing on selection
$('.nav-link').on('click', function() {
  $('.navbar-collapse').slideUp();
});

$('.navbar-toggler').on('click', function(e) {
  e.preventDefault();
  $('.navbar-collapse').slideToggle();
});

$(window).on('resize', function() {
  $('.navbar-collapse').hide();
});

$('section').on('click', function() {
  $('.navbar-collapse').hide();
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

$(function() {
  $('.contact-scroll').bind('click', function(event) {
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

$(function() {
  $('.navbar-brand').bind('click', function(event) {
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
