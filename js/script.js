'use strict';

var model = {
	genInfo:
		{
			name: 'Specialty Coffee  by Jack',
			address: '514 Sunset Drive, Downingtown, NJ 07740',
			schedule: [
				{
					day: 'Mon-Sat',
					hours: '7am-3pm' 
				},
				{
					day: 'Sun',
					hours: '8am-3pm'
				}
			],
			phone: '907-555-5555',
			philosophy: 'lorem ipsum dolor set quick pat ex tree it',
			whyUs: 'more meroal muspi rolod tes kciuq tap xe eert ti',
			src: 'img/newlogo.gif'
		},
	nav: [
		{
			item: 'Home',
			href: '#/'
		},
		{
			item: 'Shop Around',
			href: '#/'
		},
		{
			item: 'Shop Some More',
			href: '#/'
		},
		{
			item: 'Newsletter',
			href: '#/'
		},
		{
			item: 'About Us',
			href: '#/'
		},
		{
			item: 'Contact',
			href: '#/'
		}
	]

};

var viewModel = {
	init: function() {
		slider.init();
	}
};

var toggle = {
	schedule: function() {
		$('.hours-ul').slideToggle();
	}
}


/**** slider credit goes to kentowatanabe, found at: 
 	[http://www.jqueryscript.net/demo/Simplest-Fullscreen
 		-Background-Slideshow-With-jQuery-Chocolate-js/]
 */
var slider = {
	
	init: function() {
		$('.head-div').chocolate({
			images    : ['img/coffee-back.jpg', 'img/meetup.jpg', 'img/book.jpeg'],
			interval : 3500,
			speed: 1000
		});
	}
};

ko.applyBindings(viewModel.init());