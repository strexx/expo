$(function(){
    $("#slider").fadeIn();

    var i = 2;
    var imageClassFix = 0;
    var slider = {

	   sliding: $("#slider"),
	   image: 'images/screen*.png',
	   auto: true,
	   delay: 5000,
	   last: i,
	   pause: 0,
	   slide: function() {
		  $("#expo-container").children("article").mouseenter(function(){
			 slider.auto = false;
		  });
		 
		  
			 var play = setInterval(function() {
				slider.autoPlay();
	
			 }, slider.delay);
			 
			 $("#expo-container").children("article").mouseenter(function()
				{
				    slider.pause = 1;
				    clearInterval(play);
				    
				})
				
			 $("#expo-container").children("article").mouseleave(function()
				{
				    if(slider.pause == 1)
					   {
						  play = setInterval(function() {
							 slider.autoPlay();
						  }, slider.delay);
						   slider.pause = 0;
					   }
				})
		  
	   },
	   autoPlay: function(){
		  $("#expo-container").children("article").each(function()
				{
				    $(this).removeClass("shadow");
				})
				var path = slider.image.replace('*', i);
				slider.sliding.fadeOut(function() {
				    $(this).attr("src", path).fadeIn();
				    $("#"+imageClassFix).addClass("shadow");
				});
		  
				i = i + 1;
				imageClassFix = i - 1;
				if (i == 6) i = 1;
				slider.last = i;
	   }
    }

    slider.slide();
});