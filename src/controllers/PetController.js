const PetModel = require("../Models/Pet");

module.exports = {
    assync create(request, response){
        try {
            const newPet = request.body;
            const result = PetModel.create(newPet);

            return response.status(200).json({pet_id: result});
        } catch (error) {
            console.warn("Pet creation failed:", error)
            return response.status(500).json({
                notification: "internal server error while trying to create Pet"
            });
        }
    },

    assync getById(request, response){
        try {

        } catch (err) {
        
        }
    },

    assync update(request, response){
        try {
            const {pet_id} = request.params;
            const newPet = request.body;
            const result = await PetModel.updateById(pet_id, newPet);

            return response.status(200).json({pet_id: result, notification: "Pet updated sucessfully"});
        } catch (err) {
            console.warn("Pet update failed:", error)
            return response.status(500).json({
                notification: "internal server error while trying to update Pet"
            });
        }
    },

    assync delete(request, response){
        try {
            const {pet_id} = request.params;
            const result = await PetModel.deleteById(pet_id);
            if (result === 0){
                return response.status(400).json({ notification: "pet_id not found"})
            }
            return response.status(200).json({pet_id: result, notification: "Pet deleted sucessfully"});
        } catch (err) {
            console.warn("Pet delete failed:", error)
            return response.status(500).json({
                notification: "internal server error while trying to delete Pet"
            });
        }
    },
};