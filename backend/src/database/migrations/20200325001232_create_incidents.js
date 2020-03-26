
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        table.increments('id').primary();
        table.string('title', 50).notNullable();
        table.string('description', 200).notNullable();
        table.decimal('value').notNullable();
        table.integer('ong').notNullable();
        table.foreign('ong').references('id').inTable('ongs');
    });
};

exports.down = function(knex) {
    return knex.shema.dropTable('incidents');
};
