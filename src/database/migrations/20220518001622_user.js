
exports.up = function(knex) { //exportUp = fazer as alterações desejadas
    return knex.schema.createTable("user", function(table) {
        table.string('user_id').primary().notNullable(); //P.K
        table.string('name').notNullable();
        table.string('email').notNullable();
    });
};

exports.down = function(knex) { //exportDown = desfazer as alterações feitas
    return knex.schema.dropTable("user");
};
