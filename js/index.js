$('.navbar-toggler').click(function(e) {
  e.preventDefault();
  $('.nav-box').slideToggle(300);
  return;
});

$(window).resize(function() {
  navBoxBreakpoint();
});

navBoxBreakpoint = () => {
  if ($(window).width() > 767) {
    $('.nav-box').hide();
  } else if ($(window).width() <= 767 && $('.navbar-collapse').hasClass('show')) {
    $('.nav-box').show();
  } else {
    $('.nav-box').hide();
  }
};

$(window).load(function() {
  $('body').fadeIn();
});
