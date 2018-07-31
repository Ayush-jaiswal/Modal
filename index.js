$("document").ready(function(){

$("#button1").click(function(){
$(".modal_container").fadeIn(400,function(){
	$(".modal_body").slideDown(300);
});

});

$("#cross").click(function(){
$(".modal_body").slideUp(300,function(){
	$(".modal_container").fadeOut(400);
});
});

$("#close").click(function(){
$(".modal_body").slideUp(300,function(){
	$(".modal_container").fadeOut(400);
});
});







});