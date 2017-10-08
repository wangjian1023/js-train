'use strict';

module.exports = app => {
  app.post('/user/login', 'uesr.login');
  app.post('/user/register', '');
  app.post('/mobile/set', 'user.mobile');
  app.post('/mobile/modify', '');
  app.post('/photo/vote', '');
  app.post('/photo/view', 'photo.');
  app.post('/photo/update', 'phpto');
  app.post('/photo/upload', '');
};
