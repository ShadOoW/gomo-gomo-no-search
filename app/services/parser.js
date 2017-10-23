import Service from '@ember/service';

export default Service.extend({
  parse: function (mapping) {
    console.log(mapping);
  },
});
