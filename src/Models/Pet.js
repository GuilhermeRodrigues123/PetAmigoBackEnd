const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {

    async create(pet) { //Função criar usuário na tabela do banco de dados.

        const pet_id = uuidv4();
        pet.pet_id = pet_id;
        await connection("pet").insert(pet);
        return pet_id;
    },
    
    async getPets(){ //Função para procurar dentro do banco de dados um usuário pelo ID dele.

        const result = await connection("pet")
            .select("*");
        return result;

    },

    async getById( { pet_id } ){ //Função para procurar dentro do banco de dados um usuário pelo ID dele.

        const result = await connection("pet")
            .where({ pet_id })
            .select("*");
        return result;

    },

    async updateById(pet_id, pet){ //Função para atualizar os dados do usuário na tabela

        const result = await connection("pet")
            .where({ pet_id })
            .update(pet);
        return result;
    },

    async deleteById(pet_id){
        const result = await connection("pet")
            .where({ pet_id })
            .delete();
        return result;
    }

}