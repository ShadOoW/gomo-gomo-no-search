import Service from '@ember/service';
import Rx from 'rxjs/Rx';

export default Service.extend({
  $isConnected: new Rx.Subject(),

  isNodeAlive (host) {
    console.log('connecting to ' + host);
    this.get('$isConnected').next('you got some news');
  },
});
