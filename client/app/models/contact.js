import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  company: DS.attr('string'),
  title: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string')
});
