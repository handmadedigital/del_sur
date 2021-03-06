import DS from 'ember-data';

export default DS.Model.extend({
  engName: DS.attr('string'),
  spaName: DS.attr('string'),
  isExtended: DS.attr('boolean'),
  description: DS.attr('string'),
  productImg: DS.attr('string'),
  labelImg: DS.attr('string'),
  quantity: DS.attr('string'),
});
