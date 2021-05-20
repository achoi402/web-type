$(document).ready(function(){

	console.log('script loaded');

	

	$('form').submit(function(e){
	    console.log('submit');

	    let letters = $('form').val();

	    $('#letter').hide(); //hide form upon submission

	    $('#letter').show(); //show output upon submission

	    return false;
	});


});