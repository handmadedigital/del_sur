import Ember from 'ember';

export default Ember.Controller.extend({
	recipeTitle: 'VEGIE LOADED RICE',
	recipeDescription: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
	quote: 'BRING PEOPLE TOGETHER.',
	quotes: [
		'BRING PEOPLE TOGETHER.',
		'LOOK BEATIFUL.',
		'SMELL WONDERFUL.',
		'MAKE PEOPLE FEEL GOOD.',
		'INSPIRE ROMANCE.',
		'FUEL THE MIND.',
		'FUEL THE BODY.'
	],
	loops: 1,

	init: function(){
		var self = this;
		
		setInterval(function(){
			self.setQuote();
		}, 3000)
	},

	setQuote: function(){
		var self = this;
		var loops = self.get('loops');

		var amount_quotes = self.get('quotes').length;

		if(loops >= 5){
			loops = 0;
		}	

		self.set('quote', self.get('quotes')[loops]);

		self.set('loops', loops + 1);
	}

});
