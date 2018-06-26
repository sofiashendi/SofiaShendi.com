var SofiaShendi = {};

SofiaShendi.init = function(){
	var $ = jQuery;
	
	SofiaShendi.strPageId = $('body').attr('id');
	
	SofiaShendi.fancyMenu.init();
	
	switch(SofiaShendi.strPageId)
	{
		case 'home':
			SofiaShendi.touchHover.init();
			break;
		case 'clients_and_projects':
		case 'services':
			SofiaShendi.initCarousel.init();
			break;
	}

};

SofiaShendi.touchHover = {
	init: function() {
		var $ = jQuery,
			_this = SofiaShendi.touchHover;
			
		_this.$section = $('section#content > section');
		_this.$section.touch({
			useMouse: false,
			noClick: false,
			tapDelay: 0,
		});
		
		_this.bindEvents();
	}, // init()
	bindEvents: function(){
		var $ = jQuery,
			_this = SofiaShendi.touchHover;
			
		_this.$section.on('tap', function(e){
			$(this).toggleClass('show');
		});
	}, // bindEvents()
}

SofiaShendi.fancyMenu = {
	init: function() {
		var $ = jQuery,
			_this = SofiaShendi.fancyMenu;
			
		_this.$container = $('body');
		_this.$menu = $('nav#menu');
		
		_this.bindEvents();
	}, // init()
	bindEvents: function(){
		var $ = jQuery,
			_this = SofiaShendi.fancyMenu;
			
		$('#open_menu').on('click', function(e){
			e.preventDefault();
			$('body').addClass('menu_view');
		});
		$('#close_menu').on('click', function(e){
			e.preventDefault();
			$('body').removeClass('menu_view');
		});
	}, // bindEvents()
}; // SofiaShendi.fancyMenu

SofiaShendi.initCarousel = {
	init: function() {
		var $ = jQuery,
			_this = SofiaShendi.initCarousel;
			
		_this.$listing = $('#listing div.owl-carousel');
		
		_this.initOwlCarousel();
	}, // init()
	initOwlCarousel: function(){
		var $ = jQuery,
			_this = SofiaShendi.initCarousel;
	
		_this.$listing.owlCarousel({
			smartSpeed: 1500,
			dots: true,
			center:false,
			margin: 0,
			loop: false,
			responsive:{
		        0:{
		            items:1
		        },
		        768:{
			        items:2
		        },
		        1300:{
			        items:2
		        }
		    }
		});
	}, // initOwlCarousel()
}; // SofiaShendi.initCarousel

$(document).ready(function(){
	SofiaShendi.init();
});