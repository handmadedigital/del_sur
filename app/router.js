import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('recipes');
  this.route('catalog', function() {
    this.route('salty-snacks');
  });
  this.route('blogs');
  this.route('contact');
  this.route('rod');

  this.resource('recepie', function() {
    this.route('recepie-1');
    this.route('recepie-2');
    this.route('recepie-3');
    this.route('recepie-4');
  });
});

export default Router;
