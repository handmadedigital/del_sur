import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('recipes');
  this.route('catalog');
  this.route('blogs');
  this.route('contact');

  this.resource('recepie', function() {
    this.route('flan');
    this.route('tres-leches');
    this.route('codos-con-chorizo');
    this.route('rice-with-beans');
    this.route('pork-and-bean-stew');
    this.route('lomo-salteado');
  });

});

export default Router;
