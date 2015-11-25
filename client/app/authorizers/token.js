import Ember from 'ember';
import AuthorizersBase from 'ember-simple-auth/authorizers/base';

export default AuthorizersBase.extend({
  authorize: function(sessionData, block) {
    const accessToken = data['token'];
    console.log('accessToken', accessToken);
  }
})