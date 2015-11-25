import Ember from 'ember';
import request from 'ic-ajax';
import Session from 'ember-simple-auth/services/session';

export default Session.extend({
  token: null,
  isAuthenticated: Ember.computed.notEmpty('token'),

  // authenticate: function(credentials) {
  //   console.log('in the sessions.js');
  //   // var session = this;
  //   // return request('/api/token', {
  //   //   type: 'POST',
  //   //   data: JSON.stringify(credentials)
  //   // }).then(function(data) {
  //   //   session.set('token', data.token);
  //   // });
  // },
  invalidate: function() {
    this.set('token', null);
  }

});
