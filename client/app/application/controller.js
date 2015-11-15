// application controller
import Ember from 'ember';

export default Ember.Controller.extend({
  action: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
