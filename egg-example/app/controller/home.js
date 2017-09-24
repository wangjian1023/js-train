'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      const f = this.ctx.helper.foo(this.ctx.request.query.a);
      this.ctx.body = f + this.ctx.helper.foo(this.ctx.request.query.a);
    }
    * index1() {
      this.ctx.body = 'hi';
    }
    * sina() {
      const r = yield this.service.home.sina();
      this.ctx.body = r.data;
    }
    * sohu() {
      this.ctx.body = yield this.service.home.sohu();
    }
    * test() {
      const a = yield this.service.home.test();
      const b = yield this.service.test.test();
      this.ctx.body = a + b;
    }
    * lodash() {
      const d = yield this.service.lodash.chunk();
      const c = yield this.service.lodash.head();
      const e = yield this.service.lodash.compact();
      this.ctx.body = c + d + e;
    }
    * date() {
      this.ctx.body = yield this.service.home.date();
    }
  }
  return HomeController;
};
