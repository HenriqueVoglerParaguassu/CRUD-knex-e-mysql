
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username', 50).notNullable().unique();
    table.timestamps();
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}