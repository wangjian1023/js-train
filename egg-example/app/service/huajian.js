/**
 * 2017-09-25   Wang Jian
 */

'use strict';

module.exports = app => {
  class Test extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get(req) {
      let res;
      try {
        res = yield app.mysql.get('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * la() {
      const qwe = yield app.mysql.beginTransaction(); // 一个事件是一个整体 控制服务 la是一个整体，（）里面的是参数
      try {
        yield qwe.update('user', { id: 2, age: 123 });
        yield qwe.insert('home', { id: 10, age: 12 });
        yield qwe.delete('student', { id: 2 });
        yield qwe.commit();
        return true;
      } catch (e) {
        yield qwe.rollback();
        this.ctx.logger.error(e);
        return false;
      }
    }

    * delete(param) {
      try {
        yield app.mysql.delete('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * update(param) {
      try {
        yield app.mysql.update('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * create1(param) {
      try {
        yield app.mysql.insert('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get1(req) {
      let res;
      try {
        res = yield app.mysql.get('student', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete1(param) {
      try {
        yield app.mysql.delete('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * update1(param) {
      try {
        yield app.mysql.update('student', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * create2(param) {
      try {
        yield app.mysql.insert('home', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * get2(req) {
      let res;
      try {
        res = yield app.mysql.get('home', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * delete2(param) {
      try {
        yield app.mysql.delete('home', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * update2(param) {
      try {
        yield app.mysql.update('home', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }

  return Test;
};
