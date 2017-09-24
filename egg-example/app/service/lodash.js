'use strict';
const _ = require('lodash');
module.exports = app => {
  class Lodash extends app.Service {
    * chunk() {
      const r = [ 1, 2, 3, 4 ];
      return _.chunk(r, 3);
    }
    * compact() {
      const s = [ 0, 1, false, 2 ];
      return _.compact(s);
    }
    * head() {
      const b = [ 1, 2, 3 ];
      return _.head(b);
    }

  }
  return Lodash;
};
