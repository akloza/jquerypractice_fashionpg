$(document).ready(function(){

	
	$
	$(".btn1").click(function(){
		$("li").show();
	});
	$(".btn2").click(function(){
		$("li").hide();
	});
	$("h2").append($ ("strong"));
	$("#p2").after("<p>JCrew</p>");
	$("#p3").before("<b>How to Style:</b>");
	$("h3").text("Mix and Match!");
	$("#naturalHues").fadeOut(2000);
	$("#mixAndMatch").fadeIn("slow");
	$('.toggle_shoe1').click(function(){
	$("#shoe1").toggle(2000);


	});
	$('.slideDown_shoe2').click(function(){
		$("#shoe2").slideDown();
	});
	

	/*$(".btn3").click(function(){
		switch (option (). getVal()){
			case ($('option').val()==="1"){
			$('#color').append("yellow");
		}
			case ($('option').val()==="2"){
				$('#color').append("beige");
			}
			case ($('option').val()==="3"){
				$('#color').append("blush");
			}
			case($('option').val()==="4"){
				$('color').append("white");
			}
			case($('option').val()==="5"){
				$('color').append("black")
			}
			default: $('color').append("choose an age")
		});
		});*/
});