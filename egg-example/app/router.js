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
  app.post('/create1', 'huajian.create');
  app.post('/delete1', 'huajian.delete');
  app.post('/get1', 'huajian.get');
  app.post('/update1', 'huajian.update');
};
