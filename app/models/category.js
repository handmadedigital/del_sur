import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  backgroundId: DS.attr('string'),
  headerBgId: DS.attr('string'),
  displayProducts: DS.attr('boolean'),
  products: DS.hasMany('product', {async: true})
});
