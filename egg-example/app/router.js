'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/home', 'home.index1');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');
  app.get('/lodash', 'home.lodash');
  app.post('/home', 'home.index1');
  app.post('/date', 'home.date');
  app.get('/Add', 'home.without');
  app.post('/create', 'huajian.create');
  app.post('/delete', 'huajian.delete');
  app.post('/get', 'huajian.get');
  app.post('/update', 'huajian.update');
  app.post('/create1', 'huajian.create1');
  app.post('/delete1', 'huajian.delete1');
  app.post('/get1', 'huajian.get1');
  app.post('/update1', 'huajian.update1');
  app.post('/create2', 'huajian.create2');
  app.post('/delete2', 'huajian.delete2');
  app.post('/get2', 'huajian.get2');
  app.post('/la', 'huajian.la'); // 路由控制控制器  la是个函数
  app.post('/one', 'apple.one');
  app.post('/three', 'apple.three');
  app.post('/two', 'apple.two');
  app.post('/four', 'apple.four');
};
