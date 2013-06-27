$("#slider").fadeIn();

var i = 2;
var imageClassFix = 0;
var slider = {

    sliding: $("#slider"),
    image: 'img/screen*.png',
    auto: true,
    delay: 5000,
    last: i,
    slide: function() {
	   $("#expo-container").children("article").mouseenter(function(){
		  slider.auto = false;
		  console.log(slider.auto);
	   });
	   if(slider.auto == false)
	   {
		 
	   }
	   else
	   {
		 var play = setInterval(function() {
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
	
		  }, slider.delay);
	
	   }
    }
}

slider.slide();

