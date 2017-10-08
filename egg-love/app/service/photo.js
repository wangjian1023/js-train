/**
 * 2017-09-29   Wang Jian
 */

'use strict';

module.exports = app => {
  class Photo extends app.Service {
    * upload(param) {
      try {
        yield app.mysql.insert('photo', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * list() {
      let res;
      try {
        knex.select('userID', 'model', 'votes').from('photo');
        yield app.mysql.select('photo', {
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }


    * votes(param) {
      try {
        yield app.mysql.update('photo', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }

  return Photo;
};
