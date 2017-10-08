'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
      //  table.string('abc').notNullable().defaultTo('');
        table.bit('bit').notNullable().defaultTo();
        table.bool('bool').notNullable().defaultTo(0);
        table.binary('binary').notNullable().defaultTo();
        table.tinyint('tinyint').notNullable().defaultTo();
        table.bigInteger('bigInteger').notNullable().defaultTo(0);
        table.decimal('decimal').notNullable().defaultTo();
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.dateTime('dateTime').notNullable().defaultTo();
        table.float('float', 12, 8).notNullable().defaultTo();
        table.time('time').notNullable().defaultTo();
        /* table.varbinary('varbinary').notNullable().defaultTo(0);*/
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
  });
};
