$(function()
{
  $(".expo-block").on("mouseenter", function()
    {
	   var getID = $(this).children('[name="expo"]').val();
	   $("#top").children("article").css({"background": "url('img/screen"+getID+".png') 50% 0 no-repeat", "opacity": "0.7"});
	  
    });
});

