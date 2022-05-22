const UsuarioModel = require("../Models/Usuario");

const testeUsers = [

    {
        usuario_id: 1,
        name: "teste1",
        email: "teste1@email1.com",
    },

    {
        usuario_id: 2,
        name: "teste2",
        email: "teste2@email2.com",
    },

    {
        usuario_id: 3,
        name: "teste3",
        email: "teste3@email3.com",
    },

    {
        usuario_id: 4,
        name: "teste4",
        email: "teste4@email4.com",
    },

    {
        usuario_id: 5,
        name: "teste5",
        email: "teste5@email5.com",
    },
]


module.exports = {
    async create(request, response) {
        try {
            const newUsuario = request.body;
            console.log(newUsuario);
            testeUsers.push(newUsuario);
            const result = await UsuarioModel.create(newUsuario);
            return response.status(200).json({usuario_id: result});


        } catch (error) {
            console.log("User creation failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to create User",
            });

        }
    },

    async getById(request, response) {
        try {
            const { usuario_id } = request.params;
            await UsuarioModel.updateById(usuario_id);
            return response.status(200).json({ notification: "Usuario get sucessfully" });

        } catch (error) {
            console.log("User get failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to get User",
            });
        }
    },

    async delete(request, response) {
        try {
            const { usuario_id } = request.params;
            const result = await UsuarioModel.deleteById(usuario_id);
            if (result === 0)
                return response.status(400).json({ notification: "Usuario ID not found" });
            return response.status(200).json({ notification: "Usuario deleted sucessfully" });


        } catch (error) {
            console.log("User delete failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to update User",
            });
        }
    },

    async update(request, response) {
        try {
            const { usuario_id } = request.params;
            const newUsuario = request.body;
            await UsuarioModel.updateById(usuario_id, newUsuario);
            return response.status(200).json({ notification: "Usuario updated sucessfully" });

        } catch (error) {
            console.log("User update failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to update User",
            });
        }
    }


}