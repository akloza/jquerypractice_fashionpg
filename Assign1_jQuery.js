$(document).ready(function(){

	$(".btn0").click(function(){
		$("#p1").addClass("statement");
	});
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

	$(".btn3").click(function(){
		if($('option').val()==="1"){
			$('#color').append("yellow");
		}
		
		});
		
});