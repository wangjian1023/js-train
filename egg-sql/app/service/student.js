/**
 * 2017-10-07   Wang Jian
 */

'use strict';

module.exports = app => {
  class egg extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }

  return egg;
};
