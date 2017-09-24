'use strict';

module.exports = app => {
  class Test extends app.Service {
    * test() {
      return 'abc';
    }
  }
  return Test;
};
