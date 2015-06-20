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
});

export default Router;
