const FavoritarModel = require("../Models/Favoritar");
/*
module.exports = {
    async create(request, response) {
        try {
            const newFavoritar = request.body;
            console.log(newUsuario);
            const result = await FavoritarModel.create(newfavoritar);
            return response.status(200).json({ : result });

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

    async deleteByid(request, response) {
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
    }
}
*/

module.exports = {
    async create(request, response) {
        try {
            const newFavoritar = request.body;
            const result = await FavoritarModel.create(newFavoritar);
            return response.status(200).json( "Favoritar criado com sucesso!" );

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
            await FavoritarModel.getById(usuario_id);
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
            const { usuario_id, pet_id } = request.params;
            const result = await FavoritarModel.deleteById(usuario_id, pet_id);
            if (result === 0){
                return response.status(400).json({ notification: "Não existe ralacao de favoritar" })};
            return response.status(200).json({ notification: "Deleted sucessfully" });


        } catch (error) {
            console.log("User delete failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to update User",
            });
        }
    }
}