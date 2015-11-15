import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      contacts: this.store.findAll('contact')
    });
  },

  setupController(controller, models) {
    controller.set('contacts', models.contacts);
  }
});
