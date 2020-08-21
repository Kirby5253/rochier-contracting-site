// Handles the contact form submission request
(() => {
  const form = $('#fs-frm');
  const formResponse = $('#js-form-response');

  form.on('submit', function(e) {
    e.preventDefault();

    // Prepare data to send
    const data = {
      name: $('#contact-name').val(),
      reply_to: $('#contact-email').val(),
      address:
        $('#street-address').val() +
        ', ' +
        $('#street-address__city').val() +
        ' ' +
        $('#street-address__zip').val(),
      message: $('#contact-message').val(),
    };

    // Log what our lambda function will receive
    console.log(JSON.stringify(data));

    // Construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(
      'POST',
      'https://d3tt09tn78.execute-api.us-east-1.amazonaws.com/dev/rochier-static-site-mailer',
      true,
    );
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = (response) => {
      if (response.target.status === 200) {
        // The form submission was successful
        form.slideUp('slow');
        $('footer').addClass('response');
        formResponse
          .html("Thanks so much for contacting me. I'll reach out as soon as possible.")
          .fadeIn('slow');
      } else {
        form.slideUp('slow');
        // The form submission failed
        formResponse
          .html('Something went wrong. Please try calling, texting, or messaging me on Facebook.')
          .fadeIn();
        console.error(JSON.parse(response.target.response).message);
      }
    };
  });
})();
