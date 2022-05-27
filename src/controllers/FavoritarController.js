const FavoritarModel = require("../Models/Favoritar");

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
            const result = await FavoritarModel.getById(usuario_id);
            return response.status(200).json( result);

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