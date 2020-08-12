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

var submitted = false;
$(document).ready(function() {
  $('body').fadeIn();

  $('#fs-frm').on('submit', function(e) {
    e.preventDefault();

    //get the name field
    var name = $('#contact-name').val();
    //get the name field value
    var email = $('#contact-email').val();
    //get the comments
    var message = $('#contact-message').val();

    $.ajax({
      url: 'https://formspree.io/xknqevlg',
      method: 'POST',
      data: {
        name: name,
        email: email,
        message: message,
        _subject: 'Form Submission',
      },
      dataType: 'json',
      success: function() {
        console.log('success');
      },
    });
  });
});

// function validateForm() {
//   let name = $('#contact-name');
//   let email = $('#contact-email');
//   let message = $('#contact-message');
//   let submitButton = $('#sendMessage');

//   name && email && message ? submitButton.removeClass('disabled') : null;
// }

// handles contact form submission
// var submitted = false;
// $('#fs-frm').on('submit', function(e) {
//   e.preventDefault();
//   $('#fs-frm *').slideUp(600, function() {
//     $(this).remove();
//   });
//   $('#fs-frm').prepend("Thanks for the submission! I'll get back to you as soon as possible.");
// });

// var message = '';

// $('#sendMessage').on('click', function() {
//   message = $('#fs-frm').serialize().split('&');
//   $.ajax({
//     url: 'https://formspree.io/xknqevlg',
//     method: 'POST',
//     data: { message: message },
//     dataType: 'json',
//   });
// });

function validateForm() {
  let name = $('#contact-name');
  let email = $('#contact-email');
  let message = $('#contact-message');
  let submitButton = $('#sendMessage');

  name && email && message ? submitButton.removeClass('disabled') : null;
}
