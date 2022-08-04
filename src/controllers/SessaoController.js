const Firebase = require("../utils/Firebase");
const UsuarioModel = require("../Models/Usuario");
const jwt = require("jsonwebtoken");

module.exports = {
    async signIn(request, response) {
        try{
            const { email, senha } = request.body;

            let firebaseId;
            try{
                firebaseId = await Firebase.login(email, senha);
            }catch (error){
            return response
                .status(403)
                .json({ notification: "Invalide credentials"});
            }

        const usuario = await UsuarioModel.getByFields({firebase_id: firebaseId});
        const accessToken = jwt.sign({usuario} , process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "30d",
        });

        return response.status(200).json({ usuario, accessToken});

    } catch(error){
        return response.status(500).json({ notification: "error"});
    }
}
}