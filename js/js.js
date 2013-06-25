$(document).ready(function() {
  $('.expo-block').mouseenter(function(){
  	$('#top article img').remove();
  	var ID = $(this).attr('id');
  	var data = '<img style="width:100%;" src="img/screen'+ID+'.png">';
	$(data).prependTo('#top article').fadeIn(2000);
  });
});

