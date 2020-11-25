const knexfle = require('../../knexfile')
const knex = require('knex')(knexfle.development)

module.exports = knex;