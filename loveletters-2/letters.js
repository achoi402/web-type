$(document).ready(function(){

	console.log('script loaded');

	

	$('form').submit(function(e){
	    console.log('submit');

	    let identity = $('#identity').val();
	    $('#identity-input').text(indentity);

	   	let chocolate = $('#character').val();
	    $('#character-input').text(character);

	    $('form').hide(); //hide form upon submission

	    $('#letter').show(); //show output upon submission

	    return false;
	});


});