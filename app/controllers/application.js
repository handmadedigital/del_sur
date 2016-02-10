import Ember from 'ember';

export default Ember.Controller.extend({
	// setBackgroundImage: function(){
	// 	var src = this.get('model').image_src;
		

	// 	Ember.$('.banner-bk').css("background-image", src);
	// }.on('init')
	myStickyOptions: {
		topSpacing: -86,
		className: 'is-sticky' //px, default: 0 
	},
	isExpanded: false,
	currentPathChanged: function () {
		var popMenu = $('#popMenu');
		popMenu.removeClass( "active" );
	}.observes('currentPath'),
	mobileSticky: function(){
		var self = this;
		var viewportWidth = $(window).width();

		console.log('its working mobileSticky');

		Ember.run.schedule('afterRender', this, function() {
			if(viewportWidth < 999){
				$('.sticky-wrapper').addClass('is-sticky-mobile');
			}
			else {
				$('.sticky-wrapper').removeClass('is-sticky-mobile');
			}	
		});
	}.on('init'),
	onResize: function(){
		jQuery(window).on('resize', function(){
			var viewportWidth = $(window).width();
			Ember.run(function(){
				if(viewportWidth < 999){
					$('.sticky-wrapper').addClass('is-sticky-mobile');
				}
				else {
					$('.sticky-wrapper').removeClass('is-sticky-mobile');
				}	
			});
		});
	}.on('init'),
	onload: function(){
		var popMenu = $('#popMenu');
		popMenu.removeClass( "active" );
	}.on('init'),
	actions: {
		togglePopMenu() {
			var popMenu = $('#popMenu');
			var hasClass = popMenu.hasClass('active');	

			popMenu.toggleClass( "active" );

			if (hasClass === true) {
				popMenu.hide();
			} else {
				popMenu.show();
			}

		}
	},
	currentPathChanged: function () {
	window.scrollTo(0, 0);
	}.observes('currentPath')
});
