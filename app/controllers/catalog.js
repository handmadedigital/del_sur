import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
    displayProducts: function(category){
      var display_state = Ember.get(category, 'displayProducts');

      if(display_state === false){
        Ember.set(category, 'displayProducts', true);
      } else {
        Ember.set(category, 'displayProducts', false);
      }
    },
    displayProductInfo: function(category){
      var display_state = Ember.get(category, 'isExtended');

      if(display_state === false){
        Ember.set(category, 'isExtended', true);
      } else {
        Ember.set(category, 'isExtended', false);
      }
    }
  }
});
