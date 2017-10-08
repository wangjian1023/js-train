/**
 * 2017-10-07   Wang Jian 
 */

'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * one() {
      this.ctx.body = yield this.service.student.create(this.ctx.request.body);
    }

  }
  return TestController;
};
