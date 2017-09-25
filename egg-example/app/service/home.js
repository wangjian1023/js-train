'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {

      return '123';
    }
    * sina() {
      return app.curl('http://www.sina.com.cn');
    }
    * sohu() {
      return app.curl('http://www.sohu.com.cn');
    }
    * test() {
      return 'home.test';
    }
    * lodash() {
      return 'home.lodash';
    }
    * without() {
      return 'homne.without';
    }
    * date() {
      const d = new Date();
      return `${d.getFullYear()}-${this.format(d.getMonth() + 1)}-${this.format(d.getDate())} ${this.format(d.getHours())}:${this.format(d.getMinutes())}:${this.format(d.getSeconds())}`;
    }

    format(a) {
      if (a < 10) {
        return '0' + a;
      }

      return a;
    }
  }
  return Home;
};
