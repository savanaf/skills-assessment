$( "select" ).change(() => {
    let value = "";
    $( "select option:selected" ).each(function() {
        value = $(this).val();
        if (value === 'phone') {
            $('.phone').css('display', 'block')
            $('.email').css('display', 'none');
        } else {
            $('.phone').css('display', 'none')
            $('.email').css('display', 'block');
        }
    });
    $( "#output" ).text( value );
  })
  .change();

  $(".contact-listing").click(function() {
      $('.active').removeClass('active');
      var contactListing = $(this);
      contactListing.toggleClass('active');
  })