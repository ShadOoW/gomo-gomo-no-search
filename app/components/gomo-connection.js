import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  elastic: service('elastic'),

  init () {
    this.get('elastic').$isConnected.subscribe(
      value => console.log(value)
    );

    this._super();
  },
  actions: {
    connect() {
      console.log('connecting...');

      this.get('elastic').isNodeAlive('test');
    }
  }
});
