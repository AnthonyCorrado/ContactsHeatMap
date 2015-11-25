import Ember from 'ember';
import AuthenticatorsBase from 'ember-simple-auth/authenticators/base';
import config from '../config/environment';

export default AuthenticatorsBase.extend({
  restore: function(data) {
    console.log(data);
  },
  authenticate: function(email, password) {
    // console.log(Ember.isEmpty());
    var ref = new Firebase(config.firebase);
    ref.authWithPassword({
      email: email,
      password: password
    }, function(error, authData) {
      if (error) {
        console.log("Login failed", error);
      } else {
        console.log('Auth successful. Data:', authData);
      }
    });
  },
  invalidate: function(data) {
  }
})