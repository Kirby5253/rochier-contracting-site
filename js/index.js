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

  $.ajaxSetup({
    cache: false,
  });
});

var $contactForm = $('#fs-frm');
$contactForm.submit(function(e) {
  $.ajax({
    cache: false,
    url: '//formspree.io/xknqevlg',
    method: 'POST',
    data: $(this).serialize(),
    dataType: 'json',
    beforeSend: function() {
      $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
    },
    success: function(data) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--success">Message sent!</div>');
    },
    error: function(err) {
      $contactForm.find('.alert--loading').hide();
      $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
    },
  });
});

function validateForm() {
  let name = $('#contact-name');
  let email = $('#contact-email');
  let message = $('#contact-message');
  let submitButton = $('#sendMessage');

  name && email && message ? submitButton.removeClass('disabled') : null;
}
