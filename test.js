$(document).ready(function() {
	console.log('JS is laoded!');
	$('div.container-fluid').mouseover(function (){
    $(this).hide('fast');
  })
  .mouseleave(function() {
    $(this).toggle('fast');
  });
});