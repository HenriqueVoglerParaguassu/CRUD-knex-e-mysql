exports.up = (knex) => {
  return knex.schema.createTable('projects', (table) => {
    table.increments();
    table.string('title', 50)
      .notNullable()

    table.integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')

    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('projects')
}