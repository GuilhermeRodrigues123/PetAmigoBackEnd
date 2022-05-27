const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {

    async create(favoritar) { //Função criar usuário na tabela do banco de dados.

        const result = await connection("favoritar")
            .insert(favoritar);
        return result;
    },

    async getById( usuario_id ){ //Função para procurar dentro do banco de dados um usuário pelo ID dele.

        const result = await connection("favoritar")
            .where({ usuario_id })
            .join('pet', 'pet.pet_id', '=', 'favoritar.pet_id')
            .select('favoritar.*')
            .select('pet.*')
        return result;

    },

    async deleteById(usuario_id, pet_id){
        const result = await connection("favoritar")
            .where({ usuario_id,pet_id })
            .delete();
        return result;
    }

}