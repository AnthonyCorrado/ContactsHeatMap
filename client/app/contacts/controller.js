import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('contact', {
        firstName: this.get('firstName')
      });
      newPost.save();
    }
  }
});
