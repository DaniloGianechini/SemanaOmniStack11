
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table) {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('email', 100).notNullable();
        table.string('whatsapp', 20).notNullable();
        table.string('city', 30).notNullable();
        table.string('uf', 2).notNullable();

    });
};

exports.down = function(knex) {
    return knex.shema.dropTable('ongs');
};
