import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		displayProducts: function(category){
			console.log(this.store.find('category', category));
			this.store.find('category', category).toggleProperty('displayProducts');
		}
	}
});
