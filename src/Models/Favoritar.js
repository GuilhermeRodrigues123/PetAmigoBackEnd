const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {

    async create(favoritar) { //Função criar usuário na tabela do banco de dados.

        const result = await connection("favoritar")
            .insert(favoritar);
        return result;
    },

    async getById( { pet_id, usuario_id } ){ //Função para procurar dentro do banco de dados um usuário pelo ID dele.

        const result = await connection("favoritar")
            .where({ pet_id, usuario_id })
            .select("*");
        return result;

    },

    async deleteById(pet_id, usuario_id){
        const result = await connection("favoritar")
            .where({ pet_id, usuario_id })
            .delete();
        return result;
    }

}