import Ember from 'ember';

export default Ember.Controller.extend({
  currentContact: null,

  actions: {
    setContact: function(contact) {
      this.set('currentContact', contact);
    }

  }
});
