/**
 * 2017-09-25  Wang Jian 
 */

'use strict';
const _ = require('lodash');
module.exports = app => {
  class Add extends app.Service {
    * without() {
      const a = [ 2, 1, 2, 3 ];
      return _.without(a, 1, 2);
    }

  }
  return Add;
};

