
exports.up = function(knex) { //exportUp = fazer as alterações desejadas
    return knex.schema.createTable("usuario", function(table) {
        table.string("usuario_id").primary().notNullable(); //P.K
        table.string("nome").notNullable();
        table.string("email").notNullable();
        table.string("senha").nullable();
        table.string("telefone").notNullable();
        table.string("endereco").notNullable();
        table.string("cpf").notNullable();
        table.string("firebase_id").notNullable();
    });
};

exports.down = function(knex) { //exportDown = desfazer as alterações feitas
    return knex.schema.dropTable("usuario");
};
