const PetModel = require("../Models/Pet");

module.exports = {
    async create(request, response) {
        try {
            const newPet = request.body;
            const result = await PetModel.create(newPet);
            return response.status(200).json({ pet_id: result });

        } catch (error) {

            console.log("Pet creation failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to create Pet",
            });

        }
    },

    async getById(request, response) {
        try {
            const { pet_id } = request.params;
            await PetModel.getById(pet_id);
            return response.status(200).json({ notification: "Pet get sucessfully" });

        } catch (error) {
            console.log("Pet get failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to get Pet",
            });
        }
    },

    async delete(request, response) {
        try {

            const { pet_id } = request.params;
            const result = await PetModel.deleteById(pet_id);
            if (result === 0)
                return response.status(400).json({ notification: "Pet ID not found" });
            return response.status(200).json({ notification: "Pet deleted sucessfully" });


        } catch (error) {
            console.log("User delete failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to update User",
            });
        }
    },

    async update(request, response) {
        try {
            const { pet_id } = request.params;
            const newPet = request.body;
            await PetModel.updateById(pet_id, newPet);
            return response.status(200).json({ notification: "Pet updated sucessfully" });

        } catch (error) {

            console.log("Pet update failed. " + error);
            return response.status(500).json({
                notification: "Internal server error while trying to update Pet",
            });
        }
    }


}