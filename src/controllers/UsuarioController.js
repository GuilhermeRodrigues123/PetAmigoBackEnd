const UsuarioModel = require("../Models/Usuario");

module.exports = {
    assync create(request, response){
        try {
            const newUsuario = request.body;
            const result = UsuarioModel.create(newUsuario);

            return response.status(200).json({user_id: result});
        } catch (error) {
            console.warn("User creation failed:", error)
            return response.status(500).json({
                notification: "internal server error while trying to create user"
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
            const {user_id} = request.params;
            const newUser = request.body;
            const result = await UsuarioModel.updateById(user_id, newUser);

            return response.status(200).json({user_id: result, notification: "User updated sucessfully"});
        } catch (err) {
            console.warn("User update failed:", error)
            return response.status(500).json({
                notification: "internal server error while trying to update user"
            });
        }
    },

    assync delete(request, response){
        try {
            const {user_id} = request.params;
            const result = await UsuarioModel.deleteById(user_id);
            if (result === 0){
                return response.status(400).json({ notification: "user_id not found"})
            }
            return response.status(200).json({user_id: result, notification: "User deleted sucessfully"});
        } catch (err) {
            console.warn("user delete failed:", error)
            return response.status(500).json({
                notification: "internal server error while trying to delete user"
            });
        }
    },
};