const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'remotemysql.com',
    user : '5qsl1sQb05',
    password : 'fJ0h8tdSNL',
    database : '5qsl1sQb05'
  }
});

module.exports = knex;