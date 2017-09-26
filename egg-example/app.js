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
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }

    const hasstudent = yield app.mysql.query(knex.schema.hasTable('student').toString());
    if (hasstudent.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('student', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.string('sex').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const hashome = yield app.mysql.query(knex.schema.hasTable('home').toString());
    if (hashome.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('home', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.string('sex').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(userSchema.toString());
    }
    const hasTeacher = yield app.mysql.query(knex.schema.hasTable('teacher').toString());
    if (hasTeacher.length === 0) {
      const teacherSchema = knex.schema.createTableIfNotExists('teacher', function(table) {
        table.increments();
        table.string('name').notNullable().defaultTo('');
        table.integer('age').notNullable().defaultTo(0);
        table.string('sex').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });

      yield app.mysql.query(teacherSchema.toString());
      const uniqueName = knex.schema.alterTable('teacher', function(t) {
        t.unique('name');
      });
      yield app.mysql.query(uniqueName.toString());
    }
  });
};
