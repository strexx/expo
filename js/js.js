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
				    $("#expo-container").children("article").each(function(){
					   $(this).removeClass("shadow");
				    });
				    
				    var id = $(this).attr("id");
				    var update = slider.image.replace('*', id);
				    slider.sliding.fadeOut(function() {
				    $(this).attr("src", update).fadeIn();
				});
					
					i = parseInt(id) + 1;

					if(i == 6)
						i = i - 1;

					console.log(i);
				    
				    $(this).addClass("shadow");
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

    $("#expo-container article").click(function() {
    	var title = $(this).find('h1').html();
    	$('div.modal-body').empty();
    	$('select[name=project] option:selected').html(title);
    	$('div.modal-body').append('<iframe src="http://mi2.hosts.ma-cloud.nl/' + $(this).attr('data-target') + '" frameborder="0"></iframe>')
    	$('#myModal').modal();
    });

    $('select[name=project]').change(function() {

    	var project = $('select[name=project] option:selected').val();

    	if( $(this).val() ) {
	    	$('div.modal-body').fadeOut(function() {
	    		$('div.modal-body').empty();
	    		$('div.modal-body').append('<iframe src="http://mi2.hosts.ma-cloud.nl/' + project + '" frameborder="0"></iframe>').fadeIn();
	    	})
    	}
    })

    slider.slide();
});