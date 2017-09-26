/**
 * 2017-09-26   Wang Jian 
 */

'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * one() {
      this.ctx.body = yield this.service.apple.create(this.ctx.request.body);
    }
    * three() {
      this.ctx.body = yield this.service.apple.delete(this.ctx.request.body);
    }
    * two() {
      this.ctx.body = yield this.service.apple.get(this.ctx.request.body);
    }
    * four() {
      this.ctx.body = yield this.service.apple.update(this.ctx.request.body);
    }
  }
  return TestController;

};
