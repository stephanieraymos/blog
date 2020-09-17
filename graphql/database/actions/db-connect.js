const knex = require('../config')

knex.raw('show schemas')
  .then(res => console.log(res))