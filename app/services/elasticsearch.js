// Ember
import Service from '@ember/service';
// Elasticsearch
import es from 'npm:elasticsearch';
// Rx
// import Rx from 'npm:rxjs/Rx';

export default Service.extend({
  // Elasticsearch
  client: null,
  // Rx
  // $isConnected: new Rx.Subject(),

  // Public API
  connect (host) {
    this.set('client', new es.Client({host: host}));

    this.isAlive();
  },

  // Internal Methods
  isAlive () {
    this.get('client').ping({
      requestTimeout: 3000
    }, (error, resp, status) => {
      if (error) {
        console.trace('elasticsearch cluster is down!');
      } else {
        console.log('All is well');
        console.log(resp);
        console.log(status);
        this.get('client').info({}, function (error, resp) { console.log(resp)});
        this.get('client').cat.aliases({format: 'json'}, function (error, resp) { console.log(resp)});
        this.getIndices();
      }
    });
  },

  getIndices () {
    this.get('client').cat.indices({format: 'json'}, (error, resp) => {
      console.log(resp);
    });
  }
});
