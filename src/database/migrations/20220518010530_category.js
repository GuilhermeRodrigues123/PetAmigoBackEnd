exports.up = function(knex) { //exportUp = fazer as alterações desejadas
    return knex.schema.createTable("category", function(table) {
        table.increments("category_id").primary().notNullable(); //P.K. ID categoria inteiro: incrementa 1 em 1 (ID 1, ID2 etc)
        table.string("user_id").notNullable(); //F.K.
            table.foreign("user_id").references("user_id").inTable("user").onDelete("cascade"); //F.K.
        table.string("name").notNullable();
    });
};

exports.down = function(knex) { //exportDown = desfazer as alterações feitas
    
    return knex.schema.dropTable("category");
};
