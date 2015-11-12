import Ember from 'ember';
import request from 'ic-ajax';

export default Ember.Service.extend({
  token: null,
  isAuthenticated: Ember.computed.notEmpty('token'),

  authenticate: function(credentials) {
    var session = this;
    return request('/api/token', {
      type: 'POST',
      data: JSON.stringify(credentials)
    }).then(function(data) {
      session.set('token', data.token);
    });
  },
  invalidate: function() {
    this.set('token', null);
  }

});
