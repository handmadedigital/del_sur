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
  this.route('admin', function() {
    this.route('login');
    this.route('dashboard');
    this.route('blogs', function() {
      this.route('new');
      this.route('update');
      this.route('delete');
    });
    this.route('recipes', function() {
      this.route('new');
      this.route('delete');
      this.route('update');
    });
  });
});

export default Router;
