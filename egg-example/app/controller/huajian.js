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
    * create1() {
      this.ctx.body = yield this.service.huajian.create1(this.ctx.request.body);
    }
    * delete1() {
      this.ctx.body = yield this.service.huajian.delete1(this.ctx.request.body);
    }
    * get1() {
      this.ctx.body = yield this.service.huajian.get1(this.ctx.request.body);
    }
    * update1() {
      this.ctx.body = yield this.service.huajian.update1(this.ctx.request.body);
    }
    * create2() {
      this.ctx.body = yield this.service.huajian.create2(this.ctx.request.body);
    }
    * delete2() {
      this.ctx.body = yield this.service.huajian.delete2(this.ctx.request.body);
    }
    * get2() {
      this.ctx.body = yield this.service.huajian.get2(this.ctx.request.body);
    }
    * update2() {
      this.ctx.body = yield this.service.huajian.update2(this.ctx.request.body);
    }
    * la() {
      this.ctx.body = yield this.service.huajian.la(); // 参数是空  
    }

  }
  return TestController;

};
