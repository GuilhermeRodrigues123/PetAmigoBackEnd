const UsuarioModel = require("../Models/Usuario");
const Firebase = require("../utils/Firebase");
const firebase = require("../utils/Firebase");

module.exports = {
    async create(request, response) {
        try {
            const query = request.query;
            const newUsuario = request.body;

            const uid = await Firebase.createNewUser(usuario.email, usuario.login)

            console.log(newUsuario);
            const result = await UsuarioModel.create(newUsuario);
            return response.status(200).json({ usuario_id: result });

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
            await UsuarioModel.getById(usuario_id);
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