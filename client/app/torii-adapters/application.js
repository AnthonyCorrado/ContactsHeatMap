import Ember from 'ember';
import TorriFirebaseAdapter from 'emberfire/torri-adapters/firebase';

export default TorriFirebaseAdapter.extend({
  firebase: Ember.inject.service()
});