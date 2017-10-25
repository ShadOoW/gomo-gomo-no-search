import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  elasticsearch: service('elasticsearch'),
  host: '',
  content: [{label: 'Hello', value: 'hello'}, {label: 'World', value: 'world'}],
  selection: [],

  init () {
    // this.get('elastic').$isConnected.subscribe(
    //   value => console.log(value)
    // );

    this._super();
  },
  actions: {
    connect () {
      console.log('connecting...');

      this.get('elasticsearch').connect(this.get('host'));
    },
    selectIndices () {
      console.log('selecting..');
      console.log(this.get('selection'));
    }
  }
});
