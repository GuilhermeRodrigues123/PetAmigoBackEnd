
exports.up = function(knex) { //exportUp = fazer as alterações desejadas
    return knex.schema.createTable("pet", function(table) {
        table.string("pet_id").primary().notNullable(); //P.K.
        table.string("nome").notNullable();
        table.string("especie").notNullable();
        table.string("idade").notNullable();
        table.string("porte").notNullable();

        /*table.string("usuario_id").notNullable(); //F.K.
        table // F.K. Chave estrangeiro user_id faz referencia à coluna user_id na tabela user
        .foreign("usuario_id")
        .references("usuario_id")
        .inTable("usuario")
        .onDelete("cascade"); */

    });
};

exports.down = function(knex) { //exportDown = desfazer as alterações feitas
    return knex.schema.dropTable("pet");
};
