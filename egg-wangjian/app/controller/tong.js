/**
 * 2017-09-27   Wang Jian 
 */

'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * one() {
      this.ctx.body = yield this.service.tong.create(this.ctx.request.body);
    }
    * three() {
      this.ctx.body = yield this.service.tong.delete(this.ctx.request.body);
    }
    * two() {
      this.ctx.body = yield this.service.tong.get(this.ctx.request.body);
    }
    * four() {
      this.ctx.body = yield this.service.tong.update(this.ctx.request.body);
    }
  }
  return TestController;
};
