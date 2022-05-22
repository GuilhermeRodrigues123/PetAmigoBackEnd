exports.up = function(knex) { 
    return knex.schema.createTable("favoritar", function(table) {
        table.string("favoritar_id").primary().notNullable();
        table.string("usuario_id").notNullable();
        table
           .foreign("usuario_id")
           .references("usuario_id")
           .inTable("usuario")
           .onDelete("cascade");
        
            table.string("pet_id").notNullable();
            table
                .foreign("pet_id")
                .references("pet_id")
                .inTable("pet")
                .onDelete("cascade");

    });
};

exports.down = function(knex) { 
    return knex.schema.dropTable("favoritar");
};
