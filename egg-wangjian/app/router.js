'use strict';

module.exports = app => {
  app.post('/create', 'tong.one');
  app.post('/delete', 'tong.three');
  app.post('/get', 'tong.two');
  app.post('/update', 'tong.four');

};
