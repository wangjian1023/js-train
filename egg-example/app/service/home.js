'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {

      return '123';
    }
  }
  return Home;
};
