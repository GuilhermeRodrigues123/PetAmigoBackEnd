const express = require('express');
const routes = express.Router();

const auth = require("./middlewares/authentication");


const UsuarioController = require("./controllers/UsuarioController");
const UsuarioValidator = require("./validators/Usuariovalidator");

const PetController = require("./controllers/PetController");
const PetValidator = require("./validators/PetValidator");

const FavoritarController = require("./controllers/FavoritarController");
//const FavoritarValidator = require("./Validators/FavoritarValidator");

const SessaoController = require("./controllers/SessaoController");

const testeUsers = [

    {
        usuario_id: 1,
        nome: "teste1",
        email: "teste1@email1.com",
    },

    {
        usuario_id: 2,
        nome: "teste2",
        email: "teste2@email2.com",
    },

    {
        usuario_id: 3,
        nome: "teste3",
        email: "teste3@email3.com",
    },

    {
        usuario_id: 4,
        nome: "teste4",
        email: "teste4@email4.com",
    },

    {
        usuario_id: 5,
        nome: "teste5",
        email: "teste5@email5.com",
    },
]
const testePets = [

    {
        pet_id: 1,
        nome: "pet1",
        porte: "gato"
    },

    {
        pet_id: 2,
        nome: "pet2",
        porte: "gato"
    },

    {
        pet_id: 3,
        nome: "pet3",
        porte: "gato"
    },

    {
        pet_id: 4,
        nome: "pet4",
        porte: "cachorro"
    },

    {
        pet_id: 5,
        nome: "pet5",
        porte: "cachorro"
    },
]

//Sessão
routes.post("/login", SessaoController.signIn);

//Usuarios
routes.get("/usuarios/:usuario_id", UsuarioValidator.getById, UsuarioController.getById);
routes.post("/usuarios", UsuarioValidator.create, UsuarioController.create);
routes.put("/usuarios/:usuario_id", UsuarioValidator.update, UsuarioController.update);
routes.delete("/usuarios/:usuario_id", UsuarioValidator.delete, UsuarioController.delete);

//Pets
routes.get("/pets/:pet_id", PetValidator.getById, auth.authenticateToken, PetController.getById);
routes.post("/pets/", PetValidator.create, auth.authenticateToken, PetController.create);
routes.put("/pets/:pet_id", PetValidator.update, auth.authenticateToken, PetController.update);
routes.delete("/pets/:pet_id", PetValidator.delete, auth.authenticateToken, PetController.delete);

//Favoritar
routes.get("/favoritos/:usuario_id", FavoritarController.getById);
routes.post("/favoritos", FavoritarController.create);
routes.delete("/favoritos/:usuario_id/:pet_id", FavoritarController.delete);

module.exports = routes;