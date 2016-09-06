$('#menu').on('click', function(ev){
	ev.preventDefault();
	$('nav ul').slideToggle('fast');
	$('#logo').slideToggle('fast');

});
$(window).on('resize', function(ev){
	//console.info(window.innerWidth);
	if(window.innerWidth > 600){
		$('nav ul').attr('style','');	
	};
});