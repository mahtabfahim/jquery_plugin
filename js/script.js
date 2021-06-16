$(document).ready(function(){

	// alert

	// alert("Hello SSB! Welcome");

	// message
	$('#btn').click(function(){
      alert("Hello SSB! welcome");

	});

	// fadeOut
	$('#hide').click(function(){
		$('.message').fadeOut(3000);
	});

	// fadeIn

	$('#show').click(function(){
		$('.message').fadeIn();
	});

	//toggle

	$('#toggle').click(function(){
		$('.message').fadeToggle();
	});

	// fadeto
	

	});
	


$(document).ready(function(){
	$('#to').click(function(){
		$('.message').fadeTo(1000,.5);
	});
});






