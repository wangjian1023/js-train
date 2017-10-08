/**
 * 2017-09-29   Wang Jian
 */

'use strict';

module.exports = app => {
  class User extends app.Service {
    * get(login) {
      try {
        yield app.mysql.insert('user', login);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * update(register) {
      let res;
      try {
        res = yield app.mysql.update('user', register);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }

    * set(mobile) {
      try {
        yield app.mysql.create('user', mobile);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * modify(mobile) {
      try {
        yield app.mysql.update('user', mobile);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }

  return User;
};
