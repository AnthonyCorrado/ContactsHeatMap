import Ember from 'ember';

export default Ember.Component.extend({
  currentContact: null,

  actions: {
    selectContact: function(contact_id) {
      this.sendAction('selectedContact', contact_id);
    }
  }
});
