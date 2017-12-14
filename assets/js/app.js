	 $(document).ready(function(){
	 	setTimeout(function() {
	 		$('.container_logo').fadeOut(2000);
	 	}, 2000);

	 	setTimeout(function(){
	 		$('#primero').show();
	 	}, 4000);

	 	$('#btn').click(function(){
	 		$('#primero').hide();
	 	});
	 	$('select').material_select('destroy');

	});


