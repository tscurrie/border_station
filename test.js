$(document).ready(function() {
	console.log('JS is laoded!');
	$('div.container-fluid').mouseover(function (){
		$( this ).hide('slow');
	})
	.mouseout(function() {
		$(this).show('slow');

	});
	


});