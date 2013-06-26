$("#slider").fadeIn();

var slider = {

	sliding: $("#slider"),
	image: 'img/screen*.png',
	auto: true,
	delay: 5000,
	last: 0,

    slide: function() {
		var i = 2;
		if(slider.auto = true) {
			setInterval(function() {
				for(var a = 1; a < 6; a++) {
					$("#" + a).removeClass('shadow');
				}
				if(slider.last = 0) {
					$('#' + slider.last).addClass('shadow');
				}
				else {
					$('#' + i).addClass('shadow');
				}
			    var path = slider.image.replace('*', i);
			    slider.sliding.fadeOut(function() {
				    $(this).attr("src", path).fadeIn();
				});
			    i = i + 1;
			    if (i == 6) i = 1;
			}, slider.delay);
		}
    },

    stopslide: function() {
    	slider.auto = false;
    	slider.last = 0;
    	for(var i = 1; i < 6; i++) {
    		$("#" + i).removeClass('shadow');
    	}
    }
}

$('.expo-block').hover(function(){
	var id = $(this).attr('id');
	$('#slider').fadeOut();
	$("#slider").attr('src', 'img/screen' + id +'.png').fadeIn();
	slider.stopslide();
});

$('.expo-block').mouseout(function(){
	slider.auto = true;
	slider.last = $(this).attr("id");
	slider.slide();
});

slider.slide();