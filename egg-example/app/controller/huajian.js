/**
 * 2017-09-25   Wang Jian 
 */

'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.huajian.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.huajian.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.huajian.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.huajian.update(this.ctx.request.body);
    }
    * create2() {
      this.ctx.body = yield this.service.huajian.create(this.ctx.request.body);
    }
    * delete2() {
      this.ctx.body = yield this.service.huajian.delete(this.ctx.request.body);
    }
    * get2() {
      this.ctx.body = yield this.service.huajian.get(this.ctx.request.body);
    }
    * update2() {
      this.ctx.body = yield this.service.huajian.update(this.ctx.request.body);
    }
  }
  return TestController;

};
