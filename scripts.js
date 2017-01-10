//TODO:REMOVE IT WHEN HOVERING

$(function() {
	//	Adds current page functionality
	$("[href]").each(function(){
		if(this.href == window.location.href){
			$(this).addClass("active");
		}
	});	
	
	$('.navbarlist li').on('mouseover click', function(){
		$('h1').css('color', 'green');			
	});
	
	$('.navbarlist li').on('mouseout', function(){
		$('h1').css('color', 'blue');

	});
});