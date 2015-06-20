export default function(){
	this.transition(
	  this.childOf('.main-banner-changeing-text'),
	  this.use('toUp')
	);

	this.transition(
	    this.toRoute('about'),
	    this.use('toLeft'),
	    this.reverse('toRight')
	);

	this.transition(
		this.fromRoute('index'),
		this.toRoute('about'),
		this.use('toRight'),
		this.reverse('toLeft')
	);

	this.transition(
	    this.toRoute('catalog'),
	    this.use('toLeft'),
	    this.reverse('toRight')
	);

	this.transition(
	    this.toRoute('contact'),
	    this.use('toLeft'),
	    this.reverse('toRight')
	);

	this.transition(
	    this.toRoute('index'),
	    this.use('toLeft'),
	    this.reverse('toRight')
	);
};