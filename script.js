$(document).ready(function() {


 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


    $(".theButton").click(function(){
  $("#panel .container").siblings().hide();
   })


//hides only the panel that was clicked
  $(".theButton").click(function(){
  $(this).hide();
   })

//adds  a fadeTo to all panels when a panel is clicked
$(".theButton").click(function(){
	$  ("#panel .container").siblings().fadeTo(1000, .5);
   });


//restores all panels to full opacity when reset button clicked
$(".superButton").click(function(){
	$("#panel .container").siblings().fadeTo(1000,1);
   });

//turns panel background black on mouseenter
$(".theButton").mouseenter(function(){
	$(this).addClass("makeBlack");
   });

 //returns to original colour on mouseout
$(".theButton").mouseout(function(){
	$(this).removeClass("makeBlack");
   });


});
