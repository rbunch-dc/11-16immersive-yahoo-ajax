// console.log("Test");

// WAIT FOR THE DOM!!!
$(document).ready(function(){
	$('.yahoo-form').submit(function(){
		// Stop the form from submitting (default action)
		event.preventDefault();
		var symbol = $('#symbol').val();
		console.log(symbol);
	});
});