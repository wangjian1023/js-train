'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('mobile').notNullable().defaultTo('');
        table.string('wechat').notNullable().defaultTo('');
        table.string('type').notNullable().defaultTo('');
        table.integer('vote number').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }

    const hasworks = yield app.mysql.query(knex.schema.hasTable('works').toString());
    if (hasworks.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('works', function(table) {
        table.increments();
        table.string('user id').notNullable().defaultTo('');
        table.integer('state').notNullable().defaultTo(0);
        table.string('model number').notNullable().defaultTo('');
        table.string('votes').notNullable().defaultTo('');
        table.string('URL').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
    }
  });
};
