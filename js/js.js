$(document).ready(function() {

	var slider = {

		auto: true,
		image: 'img/screen*.png',
		delay: 5000,

	    slide: function() {
			var i = 1;
			if(slider.auto = true) {
				setInterval(function() {
					for(var a = 1; a < 6; a++) {
						$("#" + a).removeClass('shadow');
					}
				    var path = slider.image.replace('*', i);
				    var slide = $("#slider");
				    slide.fadeOut(function() {
					    $(this).attr("src", path).fadeIn(5000);
					});
				    i = i + 1;
				    $('#' + i).addClass('shadow');
				    if (i == 6) i = 1;
				    console.log($('#' + i));
				}, slider.delay);
			}
	    },

	    stopslide: function() {
	    	slider.auto = false;
	    	for(var i = 1; i < 6; i++) {
	    		$("#" + i).removeClass('shadow');
	    	}
	    }
	}

	$('.expo-block').mouseenter(function(){
		$('#top article img').remove();
		var id = $(this).attr('id');
		var data = '<img style="width:100%;" id="slider" src="img/screen'+ id +'.png">';
		$(data).prependTo('#top article').fadeIn(2000);
		slider.stopslide();
	});

	$('.expo-block').mouseout(function(){
		slider.slide();
	});

	slider.slide();
});

