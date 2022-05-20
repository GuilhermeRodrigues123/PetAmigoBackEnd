const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {

    async create(usuario) { //Função criar usuário na tabela do banco de dados.

        const usuario_id = uuidv4();
        usuario.usuario_id = usuario_id;
        await connection("usuario")
            .insert(usuario);
        return usuario_id;
    },

    async getById( { usuario_id } ){ //Função para procurar dentro do banco de dados um usuário pelo ID dele.

        const result = await connection("usuario")
            .where({ usuario_id })
            .select("*")
            .first();
        return result;

    },

    async updateById(usuario_id, usuario){ //Função para atualizar os dados do usuário na tabela

        const result = await connection("usuario")
            .where({ usuario_id })
            .update(usuario);
        return result;
    },

    async deleteById(usuario_id){
        const result = await connection("usuario")
            .where({ usuario_id })
            .delete();
        return result;
    }

}