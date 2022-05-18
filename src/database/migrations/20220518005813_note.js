
exports.up = function(knex) { //exportUp = fazer as alterações desejadas
    return knex.schema.createTable("note", function(table) {
        table.string("note_id").primary().notNullable(); //P.K.
        table.string("user_id").notNullable(); //F.K.
            table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade"); // F.K. Chave estrangeiro user_id faz referencia à coluna user_id na tabela user
        table.string("title").notNullable();
        table.string("description").notNullable();
    });
};

exports.down = function(knex) { //exportDown = desfazer as alterações feitas
    return knex.schema.dropTable("note");
};
