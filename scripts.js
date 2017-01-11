//TODO:REMOVE IT WHEN HOVERING

$(function() {
	//	Adds current page functionality
	$("[href]").each(function(){
		if(this.href == window.location.href){
			$(this).addClass("active");
		}
	});	
});