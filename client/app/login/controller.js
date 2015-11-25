//login controller

import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({

  actions: {
    authenticate: function() {
      var user;
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:firebase', identification, password)
        .catch((reason) => {
          this.set('errorMessage', reason.error);
        });
    }
  }
});
