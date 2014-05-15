$(function() {

	$('#registration').on('click', function(a) {
		if ($('#emailer').val() === '') {
			a.preventDefault();
			alert("Please fill in the email field! This will be your login username");
		}
	});

	$( "div" ).click(function() {
  $( this ).addClass( "form-two" );
	});


});

